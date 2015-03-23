var express = require('express');
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
        required: true
    },
    isSkill: {
        type: Boolean,
        required: true
    },
    isEvent: {
        type: Boolean,
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


/* GET achievement list. */
router.get('/', function(req, res, next) {
    Achievement.find(function(err, achievements) {
        if (err) return console.error(err);
        console.log(achievements);
        res.json(achievements);
    })

});

module.exports = router;
