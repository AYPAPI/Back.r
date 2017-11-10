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
  var location = req.body.location;

  var makerLongBio = req.body.profiles.maker.longBio
  var makerPhotos = req.body.profiles.maker.photos
  var makerIcon = req.body.profiles.maker.icons
  var makerSwipedRight = req.body.profiles.maker.swipedright
  var makerMatches = req.body.profiles.maker.matches
  var makerSwipedOn = req.body.profiles.maker.swipedon

  var backerLongBio = req.body.profiles.backer.longBio
  var backerPhotos = req.body.profiles.backer.photos
  var backerIcon = req.body.profiles.backer.icons
  var backerSwipedRight = req.body.profiles.backer.swipedright
  var backerMatches = req.body.profiles.backer.matches
  var backerSwipedOn = req.body.profiles.backer.swipedon

  db.createUser(name,age,email,isMaker,shortBio,"users",location, database);
  db.createUserProfile(makerLongBio,makerPhotos,makerIcon,email,"maker", 
                       makerSwipedRight,makerMatches,makerSwipedOn, database)
  db.createUserProfile(backerLongBio,backerPhotos,backerIcon,email,"backer", 
                       backerSwipedRight,backerMatches,backerSwipedOn,database)
  
  res.json(req.body);
});

// GET request to read user from database
router.get('/', function(req, res) {
  var email = req.body.email
  var user = db.readUser(email, 'users', database, function(user) {
    if (user != null) console.log("GOT USER: " + user.email)
    res.json(user);
  })
});

// GET request to read maker from database
router.get('/maker', function(req, res) {
  var email = req.body.email
  var user = db.readUserProfile(email, 'maker', database, function(user) {
    if (user != null) console.log("GOT MAKER USER: " + user.email)
   res.json(user);
  })
});

// GET request to read backer profile from database
router.get('/backer', function(req, res) {
  var email = req.body.email
  var user = db.readUserProfile(email, 'backer', database, function(user) {
    if (user != null) console.log("GOT USER in backer: " + user.email)
    res.json(user);
  })
});

// GET list of matches for a user
router.get('/matches', function(req, res){
  var email = req.body.email //email of user to get matches for
 /*
  var matchedUsers =
    db.readMatchedUsers(
    email,
    'settings',
    database,
    function(matchedUsers){
      if(matchedUsers != null) console.log("GOT matches for: " + email)
      res.json(matchedUsers)
      }) //array of matched users profiles 
      */
  res.json(req.body)
  });

module.exports = router;
