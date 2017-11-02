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
  email: "test@aypapi.com" 
}

// request.get('http://localhost:8080/user', function(e, res, body) {
// 	console.log(res.body);
// });

// request.post('http://localhost:8080/user', test_user, function(e, res, body) {
// 	console.log(res);
// 	console.log(body);
// 	console.log(res.body);
// });
request.post({
    url: url + "user",
    // method: "POST",
    json: true,   // <--Very important!!!
    body: test_user
}, function(err, res, body) {
	console.log(res.body);
});

// Get user
request.get({
  url: url + "user",
  json: true,   // <--Very important, otherwise it will be defaulted to HTML!!!
  body: user_email
}, function(err, res) {
  console.log("BODY: " + res);
});

// request.post('http://localhost:8080/user/addNew', function(err, res, body) {
// 	console.log(res);
// });
// console.log(res);
// request.post({
//   headers: {'content-type' : 'application/x-www-form-urlencoded'},
//   url:     'http://localhost:8080/user',
//   form:    {test_user}
// }, function(error, response, body){
//   console.log(body);
// });