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

var res = request.get({
	headers: {'content-type' : 'application/x-www-form-urlencoded'},
	url:     'http://localhost:8080/user'}
);
console.log(res);
// request.post({
//   headers: {'content-type' : 'application/x-www-form-urlencoded'},
//   url:     'http://localhost:8080/user',
//   form:    {test_user}
// }, function(error, response, body){
//   console.log(body);
// });