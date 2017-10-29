var express = require("express");
var bodyParser = require("body-parser");

var index = require('./routes/index');
var user = require('./routes/user');

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', index);
app.use('/user', user);

// view engine setup (not going to be used)
app.set('view engine', 'jade');

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

// API Endpoints 

// POST request to create user 
app.post("/createUser", function(req, res) {
  console.log("Hello  " + req.body + '\n');
  res.json(req.body);
});