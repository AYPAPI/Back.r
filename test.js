const request = require('request');
const assert = require('assert')
var url = 'http://localhost:8080/'
var delimiter = ": "
var hot_bod = " with body = "

function constructOutputString(res, body, ext) {
  return (res.request.method + " /" + ext + hot_bod + body + delimiter)
}

 var test_user = {
 	"name":"vinay",
 	"age": 21,
 	"email": "test20@aypapi.com",
 	"isMaker":true,
 	"shortBio":"dumb dumb",
   "location":"123-123",
 	"profiles":{
 		"maker": {
 			"longBio":"I have a dumb idea for a project",
 			"photos":["url for pic"],
 			"icons":[true],
       "matches":[],
       "swipedright":[],
       "swipedon":[]
 		},
 		"backer": {
 			"longBio":"I am a dumb investor, let me fund you",
 			"photos":["url for pic"],
 			"icons":[true],
       "matches":[],
       "swipedright":[],
       "swipedon":[]
 		}
 	}
 }
 /*
request.get({
  url: url + "user/getPotentialMatches",
  json: true,
  body: test_user
  }, function(err,res){
    console.log(res.body)
})*/
/*
request.patch({
  url: url + "user/isMaker",
  json: true,
  body: test_user
  }, function(err, res, body){
    console.log("POST response body - " + res.body);
  });
request.patch({
  url: url + "user",
  json: true,
  body: test_user
  }, function(err, res, body){
    console.log("POST response body - " + res.body);
  });
request.patch({
  url: url + "user/maker",
  json: true,
  body: test_user
  }, function(err, res, body){
    console.log("POST response body - " + res.body);
  });
request.patch({
  url: url + "user/backer",
  json: true,
  body: test_user
  }, function(err, res, body){
    console.log("POST response body - " + res.body);
  });
*/
// var user_email = {
//   email: "brandonisadumdum@msn.com"
// }
/*
 request.post({
     url: url + "user",
      method: "POST",
     json: true,   // <--Very important!!!
     body: test_user
 }, function(err, res, body) {
 	console.log("POST response body  - " + res);
 });
*/
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
// 	"blockedUsers": ["dumdumbrandon@aol.com", "Abena.lol@gmail.com", "Vylana@me.com", "test4@aypapi.com"]
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

 // Get user settings
 request.get({
   url: url + "user/settings?email=pi2@pie.com",
   json: true,   // <--Very important, otherwise it will be defaulted to HTML!!!
 }, function(err, res) {
   if (res != null && res.body != null){
     console.log("User's settings are : " + res.body);
     console.log(JSON.stringify(res.body))
   }
 });

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

/*
 var test_swipe = {
     "email":"test@aypapi.com",
     "swipedEmail":"test4@aypapi.com",//need an email that currently exists in the database
     "isMaker":true,
     "swipedRight":true
 }


 request.post({
     url: url + "user/swipe",
     // method: "POST",
     json: true,   // <--Very important!!!
     body: test_swipe
 }, function(err, res) {
   console.log("testing swipedRight/swipedOn POST request");
 	console.log("POST response body  - " + res.body);
 });
*/
/* Twilio Tests */

/* Test Objects */

var test_null_token = {
  "token" : null,
  "identity":"vinnie",
  "endpointId":"61553df94c234a691130ab9d3438b074"
}

var test_null_token_2 = {
  "token" : null,
  "identity":"vylana",
  "endpointId":"61553df94c234a691130ab9d3438b074"
}

var test_token = {
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0eyJqdGkiOiJTS2JjNTNkM2U1OTJkZjA2ZmIxZWRlYTgxNTc0MzIxMzBjLTE1MTE4OTI4NjYiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJ2aW5uaWUiLCJjaGF0Ijp7InNlcnZpY2Vfc2lkIjoiSVM2MDhkYzFhMTgzMzE0YjY4YjU1MGE5N2Q2ZGI2MDA2YSIsImVuZHBvaW50X2lkIjoiSVM2MDhkYzFhMTgzMzE0YjY4YjU1MGE5N2Q2ZGI2MDA2YXZpbm5pZTYxNTUzZGY5NGMyMzRhNjkxMTMwYWI5ZDM0MzhiMDc0IiwicHVzaF9jcmVkZW50aWFsX3NpZCI6IkNSZTljNWVmZjI5ZTc0NDcwOWQ3ZGY4NzVmOGE3OTdiZjAifX0sImlhdCI6MTUxMTg5Mjg2NiwiZXhwIjoxNTExOTMyODY2LCJpc3MiOiJTS2JjNTNkM2U1OTJkZjA2ZmIxZWRlYTgxNTc0MzIxMzBjIiwic3ViIjoiQUNkYjE2Njc4NDA3NTcxNTBkYjNmMjBkNmM3MjQzMmRiMCJ9.-BVxPyQjvgmHZHGVuD_eVMnUQQfGmVEeST51zWgTEXc"
}

var test_channel = {
  "channel" : {
    "description": "This is a test channel",
    "friendlyName": "vinnie/vylana",
    "uniqueName": "test_channel2",
    "identity" : "vinnie",
    "endpointId": "61553df94c234a691130ab9d3438b074"
  },
  "other_user" : {
    "email": "vylana@gmail.com",
    "name": "vylana"
  }
}

var test_message = {
  "token":null,
  "identity":"vinnie",
  "endpointId":"0",
  "messageBody": "god so today this fucking weirdo tried to hand me a theta tau flyer"
}

var test_message2 = {
  "token":null,
  "identity":"vylana",
  "endpointId":"0",
  "messageBody": "sorry bud. at least you didn't have to carry groceries up sun god"
}

/* Twilio Calls */

/* GET: a twilio access token */
// ext = "twilio/token"
// request.get({
//   url: url + ext,
//   json: true,   // <--Very important, otherwise it will be defaulted to HTML!!!
//   body: test_null_token
// }, function(err, res) {
//   if (res != null && res.body != null){
//     output = constructOutputString(res, "test_token", ext)
//     try {
//       assert.equal(res.statusCode, 200)
//       assert.ok(JSON.stringify(res.body))
//       output += "O"
//     } catch (err) {
//       output += "X"
//     }
//     console.log(output)
//   }
// });

/* GET: All channels */
/*
ext = "twilio/channels?identity=vylana&endpointId=9998"
request.get({
  url: url + ext,
  json: true,
}, function(err, res) {
  output = constructOutputString(res, "test_null_token", ext)
  try {
    assert.equal(res.statusCode, 200)
    assert.ok(('channels' in res.body))
    assert.ok((res.body.channels instanceof Array))
    console.log(res.body.channels)
    output += "O"
  } catch (err) {
    output += "X"
    output += "\n\t" + res.body
  }
  console.log(output)
});

// ext = "twilio/channels"
// request.get({
//   url: url + ext,
//   json: true,
//   body: test_null_token
// }, function(err, res) {
//   output = constructOutputString(res, "test_null_token", ext)
//   try {
//     assert.equal(res.statusCode, 200)
//     assert.ok(('channels' in res.body))
//     assert.ok((res.body.channels instanceof Array))
//     console.log(res.body.channels)
//     output += "O"
//   } catch (err) {
//     output += "X"
//     output += "\n\t" + res.body
//   }
//   console.log(output)
// });
*/

/* POST: Create a channel */
/*
var createChannelTest = function(ext) {
  request.post({
      url: url + ext,
      json: true,
      body: test_channel
  }, function(err, res) {
    output = constructOutputString(res, "test_channel", ext)
    try {
      assert.equal(res.statusCode, 200)
      assert.ok(JSON.stringify(res.body))
      output += "O"
    }
    catch (err) {
      output += "X"
      output += "\n\t" + res.body
    }
    console.log(output)
  });
}*/
// createChannelTest(ext)


/* DELETE: Delete Channel */
// ext = "twilio/channels/test_channel2"
// request.delete({
//   url: url + ext,
//   json: true,
//   body: test_null_token
// }, function (err, res) {
//   output = constructOutputString(res, "test_null_token", ext)
//   try {
//     assert.equal(res.statusCode, 200)
//     assert.ok(JSON.stringify(res.body))
//     output += "O"
//   }
//   catch (err) {
//     output += "X"
//     output += "\n\t" + res.body
//   }
//   console.log(output)
//   // createChannelTest("twilio/channels")
// });

/* POST: a message to a channel */
/*
request.post({
    url: url + "twilio/channels/test_channel2/messages",
    json: true,
    body: test_message
}, function(err, res) {
  if (err) {
    console.log(err)
  } else {
    console.log(res.body)
  }
});

request.post({
    url: url + "twilio/channels/test_channel2/messages",
    json: true,
    body: test_message2
}, function(err, res) {
  if (err) {
    console.log(err)
  } else {
    console.log(res.body)
  }
});
*/
/* GET: Channel's Messages */
/*
request.get({
    url: url + "twilio/channels/test_channel2/messages?identity=vinnie&endpointId=9999",
    json: true,
}, function(err, res) {
  if (err) {
    console.log(err)
  }
  else {
    console.log("The message bodies:\n")
    console.log(res.body)
  }
});

request.get({
    url: url + "twilio/channels/test_channel2/messages?identity=vylana&endpointId=9998",
    json: true,
}, function(err, res) {
  if (err) {
    console.log(err)
  }
  else {
    console.log("The message bodies:\n")
    console.log(res.body)
  }
});
*/
