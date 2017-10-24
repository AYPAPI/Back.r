var express = require("express");
var bodyParser = require("body-parser");

var app = express();app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

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
app.post("/createUser", function(req, res) {
    res.send({
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
             longBio: "this is the maker long bio",  
                photos: "",
                icon: true,   
            }
        }
             });
})