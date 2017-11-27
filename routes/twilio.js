var express = require('express');
var router = express.Router();
var twilio = require('twilio')
//var Twilio = require('twilio').Twilio
var Chat = require('twilio-chat')
var TwilioLib = require('../twilio');

var credentials = require('../credentials.json');
var twilioLib = new TwilioLib(credentials);

/* GET twilio token */
router.get('/getToken', function(req, res) {
	console.log(req.query.identity)
	console.log(req.query.endpointId)
	var identity = req.query && req.query.identity;
	var endpointId = req.query && req.query.endpointId;

	if (!identity || !endpointId) {
		res.status(400).send('getToken requires both an Identity and an Endpoint ID');
	}

	var token = twilioLib.getToken(identity, endpointId)
	res.send(token);
});

/* GET the list of available channels */
router.get('/channels', function(req, res) {

	var identity = req.query && req.query.identity;
	var endpointId = req.query && req.query.endpointId;

	if (!identity || !endpointId) {
		res.status(400).send('getToken requires both an Identity and an Endpoint ID');
	}
	var token = twilioLib.getToken(identity, endpointId);

	var client = new Chat.Client(token)
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

    twilioLib.getChannels(client, function(channels) {
    	result = {
			"token":token,
			"channels":channels
		}

		res.json(result)
    })
});

/* POST to /channels will create a new channel using req.body */
router.post('/channels', function(req,res) {

	var token = twilioLib.getToken(req.body.identity, req.body.endpointId);
	var client = new Chat.Client(token)

	twilioLib.createChannel(client, req.body)
	res.send("we made it back")
});

/* GET a specific channel's messages */
router.get('/channels/:channel_name/messages', function(req, res) {

	console.log("channel_name is " + req.params.channel_name)

	var body = req.body.messageBody

	var identity = req.query && req.query.identity;
	var endpointId = req.query && req.query.endpointId;
	if (!identity || !endpointId) {
		res.status(400).send('getToken requires both an Identity and an Endpoint ID');
	}

	var token = twilioLib.getToken(identity, endpointId);
	var client = new Chat.Client(token)

	twilioLib.getChannel(client, req.params.channel_name, function(channel) {
		console.log("in getChannel's callback")
		if (channel !== null) {
			console.log(channel.uniqueName + " was FOUND!\nHere are the messages:")
			channel.getMessages(0).then(function(messages) {
				message_bodies = []
				messages.items.forEach(function(msg) {
					console.log(msg.state.body)
					message_bodies.push(msg.state.body)
				});
				res.json(message_bodies)
			})
		} else {
	    	console.log("Channel with uniqueName of " + req.body.channel_name + " could not be found :(")
	    	res.err("No channel with specified name")
	    }
	});
	// res.json(req.params)
});

/* POST a message to a specific channel */
router.post('/channels/:channel_name/messages', function(req, res) {

	var body = req.body.messageBody

	var identity = req.query && req.query.identity;
	var endpointId = req.query && req.query.endpointId;
	if (!identity || !endpointId) {
		res.status(400).send('getToken requires both an Identity and an Endpoint ID');
	}

	var token = twilioLib.getToken(identity, endpointId);

	var client = new Chat.Client(token)

	twilioLib.getChannel(client, req.params.channel_name, function(channel) {
		if (channel !== null) {
			channel.sendMessage(body).then(function(messages) {
				channel.getMessages(0).then(function(msgs) {
					if (msgs.items[msgs.items.length - 1].state.body === body) {
						res_string = "message added successfully"
					} else {
						res_string = "error, message not added"
					}
					res.send(res_string)
				})
			})
		} else {
	    	res.err("No channel with specified name")
	    }
	});
});

router.delete('/channels/:channel_name/delete', function(req, res) {
	console.log("deleting channel_name: " + req.params.channel_name)
	var body = req.body.messageBody

	var channel_name = req.params.channel_name

	var identity = req.query && req.query.identity;
	var endpointId = req.query && req.query.endpointId;
	if (!identity || !endpointId) {
		res.status(400).send('getToken requires both an Identity and an Endpoint ID');
	}

	var token = twilioLib.getToken(identity, endpointId);
	client = new Chat.Client(token)

	twilioLib.getChannel(client, req.params.channel_name, function(channel) {
		if (channel != null) {
			channel.delete().then(function(channel) {
				var channel_obj = { "channel_name": channel.sid}
			res.json(channel_obj)
			// console.log('Deleted channel: ' + channel.sid);
			});
		} else {
			// res.render('error', { error: "No channel with specified name to delete" })
			res.status(404).send("No channel with specified name to delete")
		}
	});
});

module.exports = router;
