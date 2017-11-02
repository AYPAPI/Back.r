var express = require('express');
var router = express.Router();

// POST request to create user 
router.post("/", function(req, res) {
  var name = req.body.name;
  var age = req.body.age;
  var isMaker = req.body.isMaker;
  var shortBio = req.body.shortBio;
  // Maker
  var makerLongBio = req.body.profiles.maker.longBio;
  var makerPhotos = req.body.profiles.maker.photos;
  var makerIcon = req.body.profiles.maker.icon;
  // Backer
  var backerLongBio = req.body.profiles.backer.longBio;
  var backerPhotos = req.body.profiles.backer.photos;
  var backerIcon = req.body.profiles.backer.icon;
  //comment

  console.log(name + " is " + age);
  console.log(isMaker);
  console.log("She is " + shortBio);
  console.log(makerLongBio + " " + makerPhotos + " " + makerIcon);
  console.log(backerLongBio + " " + backerPhotos + " " + backerIcon);
  res.json(req.body);
});

router.get('/', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    res.json({
        "user" : "test_user",
        "isMaker" : true,
        "shortBio" : "this is the shorter bio.",
        "age" : 21,
        "profiles" : {
            "maker" : {
              longBio: "this is the maker long bio",  
              photos: "",
              icon: true,
            },
            "backer" : {
              longBio: "this is the backer long bio",  
              photos: "",
              icon: true,   
            }
        }
    });
});

module.exports = router;