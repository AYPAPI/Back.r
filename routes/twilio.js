var express = require('express');
var router = express.Router();
var twilio = require('twilio')
//var Twilio = require('twilio').Twilio
var Chat = require('twilio-chat')
var TwilioLib = require('../twilio');

var credentials = require('../credentials.json');
var twilioLib = new TwilioLib(credentials);

/* GET twilio token */
router.get('/token', function(req, res) {
	var identity = req.body && req.body.identity;
	var endpointId = req.body && req.body.endpointId;
	var token = req.body && req.body.token;

	if (!twilioLib.validInput(req.body)) {
		res.status(400).send('This route requires either an Access Token or both an Identity and an Endpoint ID');
	} else {

		if (token == null) {
			token = twilioLib.getToken(identity, endpointId);
		}
		res.status(200).send(token);
	}
});

/* GET the list of available channels */
router.get('/channels', function(req, res) {
	var name = req.query && req.query.name;//person's displayName
	var identity = req.query && req.query.identity;
	var endpointId = req.query && req.query.endpointId;
	var token = req.body && req.body.token;

	if (!twilioLib.validInput(req.query)) {
		res.status(400).send('This route requires either an Access Token or both an Identity and an Endpoint ID');
	} else {

		if (token == null) {
			token = twilioLib.getToken(identity, endpointId);
		}

		var client = new Chat.Client(token)

	    twilioLib.getChannels(client, identity, name, function(channels) {
	    	result = {
				"channels":channels
			}

			res.status(200).json(result)
	    })
	}
});

/* POST to /channels will create a new channel using req.body */
router.post('/channels', function(req,res) {

	var identity = req.body && req.body.channel.identity;
	var endpointId = req.body && req.body.channel.endpointId;
	var token = req.body && req.body.token;

	if (!twilioLib.validInput({
			"identity":req.body.channel.identity,
			"endpointId":req.body.channel.endpointId
		})) {
		res.status(400).send('This route requires either an Access Token or both an Identity and an Endpoint ID');
	}
	else {
		if (token == null) {
				token = twilioLib.getToken(req.body.channel.identity, req.body.channel.endpointId);
		}

		var client = new Chat.Client(token)

		var other_user = req.body.other_user.email
		console.log("The other user is " + other_user)

		twilioLib.createChannel(client, req.body, function(channel) {
			channel.add(other_user).then(function() {
				var token = twilioLib.getToken(other_user, 5555);
				var client = new Chat.Client(token)
				channel.join().then(e => {
					res.status(200).send("Made it back")
				}).catch(function(err) {
				   res.status(500).send("Error: " + err.message)
				});
			}).catch(function(err) {
			   res.status(500).send("Error: Could not invite other_user.\n\t Error message: " + err.message)
			});
		}).catch(e => {
		   res.status(500).send("Error: Channel with this name already exists")
		});
	}
});

/* GET a specific channel's messages */
router.get('/channels/:channel_name/messages', function(req, res) {

	console.log("channel_name is " + req.params.channel_name)

	var body = req.body.messageBody

	var identity = req.query && req.query.identity;
	var endpointId = req.query && req.query.endpointId;
	var token = req.body && req.body.token;

	if (!twilioLib.validInput(req.query)) {
		res.status(400).send('This route requires either an Access Token or both an Identity and an Endpoint ID');
	} else {

		if (token == null) {
			token = twilioLib.getToken(identity, endpointId);
		}

		var client = new Chat.Client(token)

		twilioLib.getChannel(client, req.params.channel_name, function(channel) {
			if (channel !== null) {
				console.log(channel.status)
				channel.getMessages(0).then(function(messages) {
					message_bodies = []
					messages.items.forEach(function(msg) {
						// console.log(msg.state.body)
						var messageToClient = {
							"author": msg.state.author,
							"body": msg.state.body,
							"timestamp": msg.state.timestamp
						}
						message_bodies.push(messageToClient)
					});
					res.status(200).json(message_bodies)
				}).catch(function(err) {
					res.status(500).send(err)
				})
			} else {
		    	console.log("Channel with uniqueName of " + req.body.channel_name + " could not be found :(")
		    	// res.json({"error":"No channel with specified name"})
		    }
		});
	}
	// res.json(req.params)
});

/* POST a message to a specific channel */
router.post('/channels/:channel_name/messages', function(req, res) {

	var body = req.body.messageBody

	var identity = req.body && req.body.identity;
	var endpointId = req.body && req.body.endpointId;
	var token = req.body && req.body.token;

	if (!twilioLib.validInput(req.body)) {
		res.status(400).send('This route requires either an Access Token or both an Identity and an Endpoint ID');
	} else {

		if (token == null) {
			token = twilioLib.getToken(identity, endpointId);
		}
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
						res.status(200).send(res_string)
					})
				})
			} else {
		    	// res.err("No channel with specified name")
		    }
		});
	}
});

router.delete('/channels/:channel_name', function(req, res) {
	var body = req.body.messageBody

	var channel_name = req.params.channel_name

	var identity = req.body && req.body.identity;
	var endpointId = req.body && req.body.endpointId;
	var token = req.body && req.body.token;

	if (!twilioLib.validInput(req.body)) {
		res.status(400).send('This route requires either an Access Token or both an Identity and an Endpoint ID');
	}
	else {
		if (token == null) {
			token = twilioLib.getToken(identity, endpointId);
		}
		client = new Chat.Client(token)

		twilioLib.getChannel(client, req.params.channel_name, function(channel) {
			if (channel == null) {
				res.status(404).send("Error: Channel with specified name could not be found")
			} else {
				channel.delete().then(function(channel) {
					var channel_obj = { "channel_name": channel.sid}
					res.status(200).json(channel_obj)
				}).catch(e => {
					res.status(500).send("Error: Deletion failed.")
				});
			}
		});
	}
});

module.exports = router;
