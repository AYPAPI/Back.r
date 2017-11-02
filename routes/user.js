var express = require('express');
var router = express.Router();

// Gives access to the functions in database.js
var db = require("../database");

router.post('/addNew', function(req, res) {
  db.addUser("NAME", database, "groupmembers")
});

// POST request to create user 
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

  db.create(name,age,email,isMaker,"users", database);
  db.createProfile(makerLongBio,makerPhotos,makerIcon,email,"maker", database)
  db.createProfile(backerLongBio,backerPhotos,backerIcon,email,"backer", database)
  

  console.log(name + " is " + age);
  console.log(isMaker);
  console.log("She is " + shortBio);
  console.log(makerLongBio + " " + makerPhotos + " " + makerIcon);
  console.log(backerLongBio + " " + backerPhotos + " " + backerIcon);
  
  db.addUser(req.body, database, 'Users');
  res.json(req.body);
});

// Get user
router.get('/', function(req, res) {
  var email = req.body.email
  console.log(email)
  var user = db.getUser(email, 'users', database, function(user) {
    console.log("GOT USER: " + user.email)
    res.setHeader('Content-Type', 'application/json');
    res.json(user)
  }) // Call to database function
  console.log("GOT USER: " + user)
});

//router.get('/', function(req, res) {
//	res.setHeader('Content-Type', 'application/json');
//    res.json({
//        "user" : "test_user",
//        "isMaker" : true,
//        "shortBio" : "this is the shorter bio.",
//        "age" : 21,
//        "profiles" : {
//            "maker" : {
//              longBio: "this is the maker long bio",  
//              photos: "",
//              icon: true,
//            },
//            "backer" : {
//              longBio: "this is the backer long bio",  
//              photos: "",
//              icon: true,   
//            }
//        }
//    });
//});

module.exports = router;
