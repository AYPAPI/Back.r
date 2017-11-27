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
	// var client2 = new Twilio(tokenProvider.accountSid, token);
	console.log(tokenProvider.accountSid)

	// console.log(Chat)
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
	// client2.chat.services.list().then(function(response) {
	//     console.log("Response: \n"+response);
	// }).catch(function(error) {
	//     console.log(error);
	// });
	getChannels()
	// console.log(twilio)
	// getMessages(token)

	res.send(token)
});

router.post('/channels', function(req,res) {
	createChannel(req.body)
	res.send("we made it back")
});

router.post('/channels/:channel_name/messages', function(req, res) {

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
				messages.items.forEach(function(msg) {
					console.log(msg.state.body)
				});
				// console.log(JSON.stringify(messages, null, 4))
			})

			// addMessage(channel, body);	
		} else {
	    	console.log("Channel with uniqueName of " + req.body.channel_name + " could not be found :(")
	    }
	});
	res.json(req.params)
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

function getChannels() {
	const service = client.getSubscribedChannels().then(page =>{
		subscribedChannels = page.items.sort(function(a, b) {
          return a.friendlyName > b.friendlyName;
        });
		subscribedChannels.forEach(function(chan) {
		    console.log(chan.uniqueName + " is a channel!")
		});
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
	// const client = new twilio.Twilio(TokenProvider.accountSid, token)
	// const service = client.chat.services(TokenProvider.serviceSid)
	// service.channels(channel).messages.list().then(function(response) {
	// 	console.log(response);
	// }).catch(function(error) {
	// 	console.log(error);
	// });
	return channel.getMessages(30)
}

module.exports = router;