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

  var makerLongBio = req.body.profiles.maker.longBio
  var makerPhotos = req.body.profiles.maker.photos
  var makerIcon = req.body.profiles.maker.icons

  var backerLongBio = req.body.profiles.backer.longBio
  var backerPhotos = req.body.profiles.backer.photos
  var backerIcon = req.body.profiles.backer.icons

  db.createUser(name,age,email,isMaker,shortBio,"users", database);
  db.createUserProfile(makerLongBio,makerPhotos,makerIcon,email,"maker", database)
  db.createUserProfile(backerLongBio,backerPhotos,backerIcon,email,"backer", database)
  
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

// GET request to read potential matches from database
router.get('/potential_matches', function(req, res) {
  var email = req.body.email
  var user = db.readUser(email, 'users', database, function(user) {
    var potentialMatches = db.getPotentialMatches(email,database,true,
    function(potentialMatches) {
        if(potentialMatches != null) {
            console.log("GOT POTENTIAL MATCHES: " + potentialMatches.length);
/*            for(var i = 0; i < potentialMatches.length; i++) {
                console.log(potentialMatches[i].longbio);
            }*/
            res.json(potentialMatches);
        }
    })
  })
});


module.exports = router;
