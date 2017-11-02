const request = require('request');

var test_user = {
	"name":"vinay",
	"age":"old",
	"email": "test@aypapi.com",
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

// request.get('http://localhost:8080/user', function(e, res, body) {
// 	console.log(res.body);
// });

// request.post('http://localhost:8080/user', test_user, function(e, res, body) {
// 	console.log(res);
// 	console.log(body);
// 	console.log(res.body);
// });
request.post({
    url: 'http://localhost:8080/user',
    // method: "POST",
    json: true,   // <--Very important!!!
    body: test_user
}, function(err, res, body) {
	console.log(res.body);
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