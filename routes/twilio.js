var express = require('express');
var router = express.Router();
var twilio = require('twilio')
var Twilio = require('twilio').Twilio
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

router.get('/channels', function(req, res) {

	var identity = req.query && req.query.identity;
	var endpointId = req.query && req.query.endpointId;

	if (!identity || !endpointId) {
		res.status(400).send('getToken requires both an Identity and an Endpoint ID');
	}
	var token = tokenProvider.getToken(identity, endpointId);

	client = new Chat.Client(token)
	console.log(tokenProvider.accountSid)

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

    getChannels(function(channels) {
    	result = {
			"token":token,
			"channels":channels
		}

		res.json(result)
    })
});

router.post('/channels', function(req,res) {
	createChannel(req.body)
	res.send("we made it back")
});

router.get('/channels/:channel_name/messages', function(req, res) {

	console.log("channel_name is " + req.params.channel_name)

	var body = req.body.messageBody

	var identity = req.query && req.query.identity;
	var endpointId = req.query && req.query.endpointId;
	if (!identity || !endpointId) {
		res.status(400).send('getToken requires both an Identity and an Endpoint ID');
	}

	var token = tokenProvider.getToken(identity, endpointId);
	client = new Chat.Client(token)

	getChannel(client, req.params.channel_name, function(channel) {
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

function createChannel(newChannel) {

	var token = tokenProvider.getToken(newChannel.identity, newChannel.endpointId);
	console.log(token)
	client = new Chat.Client(token)

	var attributes = {
      description: newChannel.description
    };

	return client.createChannel({
      attributes: attributes,
      friendlyName: newChannel.friendlyName,
      isPrivate: true,
      uniqueName: newChannel.uniqueName
    }).then(function(channel) {
    	return channel
    })
}

function getChannels(callback) {
	channels = []
	const service = client.getSubscribedChannels().then(page =>{
		subscribedChannels = page.items.sort(function(a, b) {
          return a.friendlyName > b.friendlyName;
        });
        channel_names = []
		subscribedChannels.forEach(function(chan) {
		    console.log(chan.uniqueName + " is a channel!")
		    channel_names.push(chan.uniqueName)
		});
		callback(channel_names)
	})
}

function getChannel(client, channel_name, callback) {
	console.log("getChannel is looking for a channel with the name: " + channel_name)
	const service = client.getSubscribedChannels().then(page =>{
		subscribedChannels = page.items.sort(function(a, b) {
          return a.friendlyName > b.friendlyName;
        });
		for(var chan of subscribedChannels) {
		    console.log(chan.uniqueName + " is a channel!")
		    if (chan.uniqueName.trim() === channel_name.trim()) {
		    	console.log("FOUND " + channel_name + "\n\t calling callback")
		    	callback(chan)
		    	break
		    }
		};
	})
}

function addMessage(channel, body) {
	channel.sendMessage(req.body.messageBody)
}

function getMessages(channel) {
	return channel.getMessages(30)
}

module.exports = router;