var express = require("express");
var bodyParser = require("body-parser");

var index = require('./routes/index');
var user = require('./routes/user');
var db = require('./database.js');

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', index);
app.use('/user', user);

// view engine setup (not going to be used)
app.set('view engine', 'jade');

global.database = db.connect();

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

// GET request to get a test user
// app.get("/createUser", function(req, res) {
//     res.setHeader('Content-Type', 'application/json');
//     res.json({
//         "user" : "test_user",
//         "isMaker" : true,
//         "shortBio" : "this is the shorter bio.",
//         "age" : 21,
//         "profiles" : {
//             "maker" : {
//               longBio: "this is the maker long bio",  
//                 photos: "",
//                 icon: true,
//             },
//             "backer" : {
//              longBio: "this is the backer long bio",  
//                 photos: "",
//                 icon: true,   
//             }
//         }
//     });
// })
