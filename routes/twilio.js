var express = require('express');
var router = express.Router();
var twilio = require('twilio')
var Chat = require('twilio-chat')
var TokenProvider = require('../twilio');

var credentials = require('../credentials.json');
var tokenProvider = new TokenProvider(credentials);
var client

/* GET twilio token */
router.get('/getToken', function(req, res) {
	console.log(req.query.identity)
	console.log(req.query.endpointId)
	var identity = req.query && req.query.identity;
	var endpointId = req.query && req.query.endpointId;

	if (!identity || !endpointId) {
		res.status(400).send('getToken requires both an Identity and an Endpoint ID');
	}

	// var token = tokenProvider.getToken(identity, endpointId);
	var token = TokenProvider.TokenGenerator(identity, endpointId)
	res.send(token);
});

router.get('/getChannels', function(req, res) {
	// if (!req.query && !req.query.token) {
	// 	res.status(400).send('Need to pass in token');
	// }

	// var token = req.query.token
	var identity = req.query && req.query.identity;
	var endpointId = req.query && req.query.endpointId;

	if (!identity || !endpointId) {
		res.status(400).send('getToken requires both an Identity and an Endpoint ID');
	}
	var token = tokenProvider.getToken(identity, endpointId);

	// const client = new Twilio(TokenProvider.accountSid, token)
	// client = new twilio("ACdb1667840757150db3f20d6c72432db0", token)
	client = new Chat.Client(token)
	console.log(Chat)
	var cache = []
    client_str = JSON.stringify(client, function(key, value) {
          if (typeof value === 'object' && value !== null) {
              if (cache.indexOf(value) !== -1) {
                  // Circular reference found, discard key
                  return;
              }
              // Store value in our collection
              cache.push(value);
          }
          return value;
      });
      cache = null
	// console.log(client_str)
	// const service = client.chat.services(tokenProvider.serviceSid)

	getChannels()
});

function getChannels() {
	console.log("Calling getChannels() on client: \n" + client_str)
	const service = client.getSubscribedChannels().then(page =>{
		subscribedChannels = page.items.sort(function(a, b) {
          return a.friendlyName > b.friendlyName;
        });
        console.log("There are " + subscribedChannels.length + " many channels")
		subscribedChannels.forEach(function(chan) {
		    console.log(chan);
		});
	})
}

function getMessages(channel) {
	const client = new Twilio(TokenProvider.accountSid, token)
	const service = client.chat.services(TokenProvider.serviceSid)
	service.channels(channel).messages.list().then(function(response) {
		console.log(response);
	}).catch(function(error) {
		console.log(error);
	});

}

module.exports = router;