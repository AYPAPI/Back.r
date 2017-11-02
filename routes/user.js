var express = require('express');
var router = express.Router();

// Gives access to the functions in database.js
var db = require("../database");

router.post('/addNew', function(req, res) {
  db.addUser("NAME", database, "groupmembers")
});

// POST request to create user in database
router.post("/", function(req, res) {
  var name = req.body.name;
  var age = req.body.age;
  var email = req.body.email;
  var isMaker = req.body.isMaker;
  var shortBio = req.body.shortBio;
  console.log(name);

  // Maker
  var makerLongBio = req.body.profiles.maker.longBio;
  var makerPhotos = req.body.profiles.maker.photos;
  var makerIcon = req.body.profiles.maker.icon;

  // Backer
  var backerLongBio = req.body.profiles.backer.longBio;
  var backerPhotos = req.body.profiles.backer.photos;
  var backerIcon = req.body.profiles.backer.icon;

  db.createUser(name,age,email,isMaker,"users", database);
  db.createUserProfile(makerLongBio,makerPhotos,makerIcon,email,"maker", database)
  db.createUserProfile(backerLongBio,backerPhotos,backerIcon,email,"backer", database)
  
  console.log(name + " is " + age);
  console.log(isMaker);
  console.log("She is " + shortBio);
  console.log(makerLongBio + " " + makerPhotos + " " + makerIcon);
  console.log(backerLongBio + " " + backerPhotos + " " + backerIcon);
  
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
