// JavaScript dependencies that were downloaded using npm install
var express = require("express");
var bodyParser = require("body-parser");

// JavaScript files needed that are in the project
var index = require('./routes/index');
var user = require('./routes/user');
var db = require('./database.js');

var app = express();

// Stuff for requests
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Tells Node to use these files if the url starts with /[whatever is the first param]
app.use('/', index);
app.use('/user', user);

// view engine setup (not going to be used)
app.set('view engine', 'jade');

// GLOBAL variable to initialze reference to database (not including 'var' in front makes it global)
database = db.connect();

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}