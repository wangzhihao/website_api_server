Each single item  is an __achievement__ which contains the following fields.
1. subject;
    * Description: a branch of knowledge studied or taught in a school, college, or university.
    * Type: String
    * Mandatory: Yes
2. category;
    * Description:   Sub branch under __subject__ such as css, html, solid angle etc. A __category__ belongs to fixed __subjects__ and thus __subjects__ can be auto-completed.
    * Type: String
    * Mandatory: Yes
3. inProgress  
    * Description: `true` if the achievement just started and does not finish, `false` if it already finished.
    * Type: boolean
    * Mandatory: Yes
    * Default: `false`
4. deadline
    * Description: A supposed date before which I should win this achievement.
    * Type: Date
    * Mandatory: No
5. type
    * Description: The achievement type which can be `course`, `paper`, `book`, `skill` and more.
    * Type: String
    * Mandatory: Yes
6. level
    * Description: The bloom's taxonomy congnitive six levels.
    * Type: String
    * Mandatory: Yes  
7. resources
    * Description: links which point to the related useful resourses.
    * Type: Array
    * Mandatory: No
9. name
    * Description: A short description of the achievement.
    * Type: String
    * Mandatory: Yes
10. id
    * Description: The key for this achievement record in database;
    * Type: Database_Key
    * Mandatory: Yes
11. forgotten
    * Description: `true` if the achievement is already forgotten, `false` othewise.
    * Type: Boolean
    * Mandatory: Yes
    * Default: `false`
12. createDate
    * Description: The time when this achievement is created, which is automatically populated by the system.
    * Type: Date
    * Mandatory: Yes
13. updateDate
    * Description: The last time when this achievement is updated, which is automatically populated by the system.
    * Type: Date
    * Mandatory: Yes