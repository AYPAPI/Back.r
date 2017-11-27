var twilio = require('twilio')
var AccessToken = twilio.jwt.AccessToken;
var ChatGrant = AccessToken.ChatGrant;

function TwilioLib(credentials) {
  Object.defineProperties(this, {
    accountSid: {
      enumerable: true,
      value: credentials.accountSid
    },
    signingKeySid: {
      enumerable: true,
      value: credentials.signingKeySid
    },
    signingKeySecret: {
      enumerable: true,
      value: credentials.signingKeySecret || credentials.authToken
    },
    serviceSid: {
      enumerable: true,
      value: credentials.serviceSid || credentials.instanceSid
    },
    pushCredentialSid: {
      enumerable: true,
      value: credentials.pushCredentialSid
    }
  });
}

TwilioLib.prototype.getToken = function(identity, endpointId) {
  var token = new AccessToken(this.accountSid, this.signingKeySid, this.signingKeySecret, {
    identity: identity,
    ttl: 40000
  });

  // var grant = new ChatGrant({ pushCredentialSid: this.pushCredentialSid });
  var grant = new ChatGrant({ pushCredentialSid: this.pushCredentialSid });

  grant.serviceSid = this.serviceSid;
  grant.endpointId = this.serviceSid + identity + endpointId;
  token.addGrant(grant);

  return token.toJwt();
};


TwilioLib.prototype.createChannel = function(client, newChannel) {

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

TwilioLib.prototype.getChannels = function(client, callback) {
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

TwilioLib.prototype.getChannel = function(client, channel_name, callback) {
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

module.exports = TwilioLib;