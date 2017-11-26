var express = require('express');
var router = express.Router();
var TokenProvider = require('../twilio');

var credentials = require('../credentials.json');
var tokenProvider = new TokenProvider(credentials);

/* GET twilio token */
router.get('/getToken', function(req, res) {
	console.log(req.query.identity)
	console.log(req.query.endpointId)
  var identity = req.query && req.query.identity;
  var endpointId = req.query && req.query.endpointId;

  if (!identity || !endpointId) {
    res.status(400).send('getToken requires both an Identity and an Endpoint ID');
  }

  var token = tokenProvider.getToken(identity, endpointId);
  res.send(token);
});

module.exports = router;