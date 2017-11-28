const request = require('request');
var url = 'http://localhost:8080/'

// var test_user = {
// 	"name":"vinay",
// 	"age": 21,
// 	"email": "test@aypapi.com",
// 	"isMaker":true,
// 	"shortBio":"dumb dumb",
//   "location":"123-123",
// 	"profiles":{
// 		"maker": {
// 			"longBio":"I have a dumb idea for a project",
// 			"photos":["url for pic"],
// 			"icons":[true],
//       "matches":[],
//       "swipedright":[],
//       "swipedon":[]
// 		},
// 		"backer": {
// 			"longBio":"I am a dumb investor, let me fund you",
// 			"photos":["url for pic"],
// 			"icons":[true],
//       "matches":[],
//       "swipedright":[],
//       "swipedon":[]
// 		}
// 	}
// }

// var user_email = {
//   email: "brandonisadumdum@msn.com"
// }

// request.post({
//     url: url + "user",
//     // method: "POST",
//     json: true,   // <--Very important!!!
//     body: test_user
// }, function(err, res, body) {
// 	console.log("POST response body  - " + res.body);
// });

// // Get user
// request.get({
//   url: url + "user",
//   json: true,   // <--Very important, otherwise it will be defaulted to HTML!!!
//   body: user_email
// }, function(err, res) {
//   if (res != null && res.body != null) {
//     console.log("User's email is : " + res.body.email);
//   }
// });

// // Get maker
// request.get({
//   url: url + "user/maker",
//   json: true,
//   body: user_email
// }, function(err, res) {
//   if (res != null && res.body != null) {
//     console.log("Maker's email is : " + res.body.email);
//     console.log("Maker's long bio is : " + res.body.longbio);
//     console.log("Maker's photos are : " + res.body.photos);
//     console.log("Maker's icons are : " + res.body.icons);
//   }
// });

// // Get Backer test
// request.get({
//   url: url + "user/backer",
//   json: true,   // <--Very important, otherwise it will be defaulted to HTML!!!
//   body: user_email
// }, function(err, res) {
//   if (res != null  && res.body != null){
//     console.log("User's email is : " + res.body.email);
//     console.log("User's long bio is : " + res.body.longbio);
//     console.log(res.body.photos);
//     console.log(res.body.icons);

//   }
// });

// var test_settings = {
// 	"location": {
//       lat: 50,
//       long: 50
//     },
// 	"isVisible": false,
// 	"blockedUsers": ["dumdumbrandon@aol.com", "Abena.lol@gmail.com", "Vylana@me.com", "Gary@professionalism.com"]
// }

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

// // Get user
// request.get({
//   url: url + "user/settings",
//   json: true,   // <--Very important, otherwise it will be defaulted to HTML!!!
//   body: user_email
// }, function(err, res) {
//   if (res != null && res.body != null){
//     console.log("User's settings are : " + res.body);
//     console.log("lat: "  + res.body.latitude)
//   }
// });

// var test_swipe = {
//     "email":"test@aypapi.com",
//     "swipedEmail":"test4@aypapi.com",//need an email that currently exists in the database
//     "isMaker":true,
//     "swipedRight":true
// }


// request.post({
//     url: url + "user/swipe",
//     // method: "POST",
//     json: true,   // <--Very important!!!
//     body: test_swipe
// }, function(err, res) {
//   console.log("testing swipedRight/swipedOn POST request");
// 	console.log("POST response body  - " + res.body);
// });

var test_token = {
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2JjNTNkM2U1OTJkZjA2ZmIxZWRlYTgxNTc0MzIxMzBjLTE1MTE4MzYxOTQiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJicmFuZG9uIiwiY2hhdCI6eyJzZXJ2aWNlX3NpZCI6IklTNjA4ZGMxYTE4MzMxNGI2OGI1NTBhOTdkNmRiNjAwNmEiLCJlbmRwb2ludF9pZCI6IklTNjA4ZGMxYTE4MzMxNGI2OGI1NTBhOTdkNmRiNjAwNmFicmFuZG9uMSIsInB1c2hfY3JlZGVudGlhbF9zaWQiOiJDUmU5YzVlZmYyOWU3NDQ3MDlkN2RmODc1ZjhhNzk3YmYwIn19LCJpYXQiOjE1MTE4MzYxOTQsImV4cCI6MTUxMTg3NjE5NCwiaXNzIjoiU0tiYzUzZDNlNTkyZGYwNmZiMWVkZWE4MTU3NDMyMTMwYyIsInN1YiI6IkFDZGIxNjY3ODQwNzU3MTUwZGIzZjIwZDZjNzI0MzJkYjAifQ.2Fc7Pn9RmUlDjch-vYFlLMVzIcrSCTVmDOA5es9H4cs",
  "identity":"brandon",
  "endpointId":"61553df94c234a691130ab9d3438b074"
}

// request.get({
//   url: url + "twilio/getToken?identity=brandon&endpointId=61553df94c234a691130ab9d3438b074",
//   json: true   // <--Very important, otherwise it will be defaulted to HTML!!!
// }, function(err, res) {
//   if (res != null && res.body != null){
//     console.log("The result is : " + JSON.stringify(res.body));
//   }
// });

// var test_channel = {
//   "description": "This is a test channel",
//   "friendlyName": "andrew/vylana",
//   "uniqueName": "testing_our_fingerprint",
//   "identity" : "aypapi@gmail.com",
//   "endpointId": "0"
// }

// var test_channel = {
//   "description": "This is a test channel",
//   "friendlyName": "tester2017",
//   "uniqueName": "brandon_test",
//   "identity" : "brandon",
//   "endpointId": "61553df94c234a691130ab9d3438b074"
// }

/* POST: Create a channel */
// request.post({
//     url: url + "twilio/channels",
//     // method: "POST",
//     json: true,   // <--Very important!!!
//     body: test_channel
// }, function(err, res) {
//   if (err) {
//     console.log(err)
//   }
// });

/* GET: All channels */
// request.get({
//   url: url + "twilio/channels?identity=brandon&endpointId=1",
//   json: true,
//   body: test_token
// }, function(err, res) {
//   if (res != null && res.body != null){
//     console.log("The result is : " + JSON.stringify(res.body));
//     // token = res.body
//   }
// });

// var test_message = {
//   "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2JjNTNkM2U1OTJkZjA2ZmIxZWRlYTgxNTc0MzIxMzBjLTE1MTE4MzYxOTQiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJicmFuZG9uIiwiY2hhdCI6eyJzZXJ2aWNlX3NpZCI6IklTNjA4ZGMxYTE4MzMxNGI2OGI1NTBhOTdkNmRiNjAwNmEiLCJlbmRwb2ludF9pZCI6IklTNjA4ZGMxYTE4MzMxNGI2OGI1NTBhOTdkNmRiNjAwNmFicmFuZG9uMSIsInB1c2hfY3JlZGVudGlhbF9zaWQiOiJDUmU5YzVlZmYyOWU3NDQ3MDlkN2RmODc1ZjhhNzk3YmYwIn19LCJpYXQiOjE1MTE4MzYxOTQsImV4cCI6MTUxMTg3NjE5NCwiaXNzIjoiU0tiYzUzZDNlNTkyZGYwNmZiMWVkZWE4MTU3NDMyMTMwYyIsInN1YiI6IkFDZGIxNjY3ODQwNzU3MTUwZGIzZjIwZDZjNzI0MzJkYjAifQ.2Fc7Pn9RmUlDjch-vYFlLMVzIcrSCTVmDOA5es9H4cs",
//   "messageBody": "Vinay u is a dumb dumb but u is a gud fren"
// }


// request.post({
//     url: url + "twilio/channels/channel1/messages",
//     json: true,
//     body: test_message
// }, function(err, res) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(res.body)
//   }
// });


/* Get Channel's Messages */
// request.get({
//     url: url + "twilio/channels/channel1/messages",
//     json: true,
//     body: test_token
// }, function(err, res) {
//   if (err) {
//     console.log(err)
//   }
//   else {
//     console.log("The message bodies:\n")
//     console.log(res.body[0])
//   }
// });

/* Delete Channel */
// request.delete({
//   url: url + "twilio/channels/brandon_test/delete",
//   json: true,
//   body: test_token
// }, function (err, res) {
//   if (res.status != 200) {
//     console.log(res.body)
//   } else {
//     console.log("Delete:")
//     console.log(res.body.channel_name)
//   }
// });
