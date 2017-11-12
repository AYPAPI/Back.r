const request = require('request');
var url = 'http://localhost:8080/'

var test_user = {
	"name":"vinay",
	"age": 21,
	"email": "test@aypapi.com",
	"isMaker":true,
	"shortBio":"dumb dumb",
	"profiles":{
		"maker": {
			"longBio":"I have a dumb idea for a project",
			"photos":["url for pic"],
			"icons":[true]
		},
		"backer": {
			"longBio":"I am a dumb investor, let me fund you",
			"photos":["url for pic"],
			"icons":[true]
		}
	}
}

var user_email = {
  email: "brandonisadumdum@msn.com"
}

request.post({
    url: url + "user",
    // method: "POST",
    json: true,   // <--Very important!!!
    body: test_user
}, function(err, res, body) {
	console.log("POST response body  - " + res.body);
});

// Get user
request.get({
  url: url + "user",
  json: true,   // <--Very important, otherwise it will be defaulted to HTML!!!
  body: user_email
}, function(err, res) {
  if (res != null && res.body != null){
    console.log("User's email is : " + res.body.email);
  }
});

//////////////////////////SETTINGS/////////////////////
var test_settings = {
	"location": {
      lat: 50,
      long: 50
    },
	"isVisible": false,
	"blockedUsers": ["dumdumbrandon@aol.com", "Abena.lol@gmail.com", "Vylana@me.com", "Gary@professionalism.com"]
}

//request.post({
//  url: url + "user/settings/create",
//  json: true,
//  body: test_settings
//}, function(err, res, body) {
//  console.log("POST response body  - " + res.body);
//})

//request.post({
//    url: url + "user/settings",
//    // method: "POST",
//    json: true,   // <--Very important!!!
//    body: test_settings
//}, function(err, res, body) {
//	console.log("POST response body  - " + res.body);
//});

// Get user
request.get({
  url: url + "user/settings",
  json: true,   // <--Very important, otherwise it will be defaulted to HTML!!!
  body: user_email
}, function(err, res) {
  if (res !== null){
    console.log("User's settings are : " + res.body);
    console.log("lat: "  + res.body.latitude)
  }
});
///////////////////////////////////////////////////////
