const request = require('request');

var test_user = {
	"name":"vinay",
	"age":"old",
	"isMaker":true,
	"shortBio":"dumb dumb",
	"profiles":{
		"maker": {
			"longBio":"I have a dumb idea for a project",
			"photos":"url for pic",
			"icon":true
		},
		"backer": {
			"longBio":"I am a dumb investor, let me fund you",
			"photos":"url for pic",
			"icon":true
		}
	}
}

request.post({
        url: 'http://localhost:8080/user',
         body: test_user
         }, function(error, response, body){
            console.log(body);
    });