var express = require('express');
var router = express.Router();

// Gives access to the functions in database.js
var db = require("../database");

router.post('/addNew', function(req, res) {
  db.addUser("NAME", database, "groupmembers")
});

// POST request to create user in database
router.post("/", function(req, res) {

  db.createUser(name,age,email,isMaker,"users", database);
  db.createUserProfile(makerLongBio,makerPhotos,makerIcon,email,"maker", database)
  db.createUserProfile(backerLongBio,backerPhotos,backerIcon,email,"backer", database)
  
  res.json(req.body);
});

// GET request to read user from database
router.get('/', function(req, res) {
  var email = req.body.email
  var user = db.readUser(email, 'users', database, function(user) {
    console.log("GOT USER: " + user.email)
    res.json(user);
  })
});

module.exports = router;
