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

/* Twilio Tests */

/* Test Objects */
var test_token = {
  "token" : null,
    "identity":"vinnie",
  "endpointId":"61553df94c234a691130ab9d3438b074"
}

var test_channel = {
  "channel" : {
    "description": "This is a test channel",
    "friendlyName": "vylana/vinnie",
    "uniqueName": "test_channel",
    "identity" : "vinnie",
    "endpointId": "61553df94c234a691130ab9d3438b074"
  },
  "other_user" : {
    "email": "vylana"
  }
}

var test_message = {
  "token":null,
  "identity":"brandon",
  "endpointId":"0",
  "messageBody": "Branday is so stylish because his socks match his sweater"
}

/* Twilio Calls */

/* !!!! Test getToken, need to change to handle invalid input better (dum dum) */
// request.get({
//   url: url + "twilio/getToken",
//   json: true,   // <--Very important, otherwise it will be defaulted to HTML!!!
//   body: test_token
// }, function(err, res) {
//   if (res != null && res.body != null){
//     console.log("The result is : " + JSON.stringify(res.body));
//   }
// });

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
//   else {
//     console.log(res.body)
//   }
// });

/* GET: All channels */
// request.get({
//   url: url + "twilio/channels",
//   json: true,
//   body: test_token
// }, function(err, res) {
//   if (res != null && res.body != null){
//     console.log("The result is : " + JSON.stringify(res.body));
//   }
// });

/* POST: a message to a channel */
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

/* GET: Channel's Messages */
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

/* DELETE: Delete Channel */
// request.delete({
//   url: url + "twilio/channels/test_channel/delete",
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
