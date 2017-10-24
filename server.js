var express = require("express");
var bodyParser = require("body-parser");

var app = express();app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded())

app.get('/', function(req, res){
   res.send("Hello world!");
});

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

// GET request to get a test user
app.get("/createUser", function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json({
        "user" : "test_user",
        "isMaker" : true,
        "shortBio" : "this is the shorter bio.",
        "age" : 21,
        "profiles" : {
            "maker" : {
              longBio: "this is the maker long bio",  
                photos: "",
                icon: true,
            },
            "backer" : {
             longBio: "this is the backer long bio",  
                photos: "",
                icon: true,   
            }
        }
    });
})