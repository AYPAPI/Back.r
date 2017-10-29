var express = require('express');
var router = express.Router();

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