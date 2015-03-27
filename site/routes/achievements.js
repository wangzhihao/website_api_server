var express = require('express');
var async = require('async');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/personal_site');

var Schema = mongoose.Schema;

var achievementSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  inProgress: {
    type: Boolean,
    required: true
  },
  deadline: {
    type: Date,
    required: false
  },
  type: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  resources: {
    type: [String],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  forgotten: {
    type: Boolean,
    required: true
  },
  createDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  updateDate: {
    type: Date,
    default: Date.now,
    required: true
  }
});

var Achievement = mongoose.model('Achievement', achievementSchema);


/* retrieve achievement list. */
router.get('/', function(req, res, next) {
  Achievement.find(function(err, achievements) {
    if (err) {
      console.error(err);
      next(err);
    } else {
      //console.log(achievements);
      res.json(achievements);
    }
  });

});

// create a new achievement.
router.post('/', function(req, res, next) {
  //console.log(req.body);
  Achievement.create(req.body, function(err) {
    if (err) {
      console.error(err);
      next(err);
    } else {
      res.json('OK');
    }
  });
})

// modify an old achievement.
//The code is from http://stackoverflow.com/a/7855281/1494097
router.put('/', function(req, res, next) {
    updateOne(req.body, function(err) {
      if (err) {
        console.error(err);
        next(err);
      } else {
        res.json('OK');
      }
    });
  })
  //modify a list of old achievements.
router.put('/batch', function(req, res, next) {

  //console.log(req.body);
  async.each(req.body, function(single, callback) {
      updateOne(single, function(err, numberAffected, raw) {
        if (err) {
          console.error(err);
          callback(err);
        } else {
          callback();
        }
        //console.log('The number of updated documents was %d', numberAffected);
        //console.log('The raw response from Mongo was ', raw);
      });
    },
    function(err) {
      if (err) {
        console.error(err);
        next(err);
      } else {
        res.json('OK');
      }
    }
  );

})


function updateOne(object, callback) {
  var achievement = new Achievement(object);
  // Convert the Model instance to a simple object using Model's 'toObject' function
  // to prevent weirdness like infinite looping...
  var updateData = achievement.toObject();
  //console.log(upsertData);
  // Delete the _id property, otherwise Mongo will return a "Mod on _id not allowed" error
  delete updateData._id;

  // update the existing doc with updateData
  Achievement.update({
    _id: achievement.id
  }, updateData, {
    upsert: false
  }, callback);
}

// remove an old achievement
router.delete('/', function(req, res, next) {
  Achievement.remove(req.body, function(err) {
    if (err) {
      console.error(err);
      next(err);
    } else {
      res.json('OK');
    }
  });
})

module.exports = router;
