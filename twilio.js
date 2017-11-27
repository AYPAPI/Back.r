var twilio = require('twilio')
var AccessToken = twilio.jwt.AccessToken;
var ChatGrant = AccessToken.ChatGrant;

// function TokenGenerator(identity, deviceId) {
//   const appName = 'TwilioChat';

//   // Create a unique ID for the client on their current device
//   const endpointId = appName + ':' + identity + ':' + deviceId;

//   // Create a "grant" which enables a client to use IPM as a given user,
//   // on a given device
//   const ipmGrant = new ChatGrant({
//     serviceSid: process.env.TWILIO_IPM_SERVICE_SID,
//     endpointId: endpointId,
//   });

//   // Create an access token which we will sign and return to the client,
//   // containing the grant we just created
//   const token = new AccessToken(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_AUTH_TOKEN,
//     process.env.TWILIO_API_SECRET
//   );

//   token.addGrant(ipmGrant);
//   token.identity = identity;

//   return token;
// }

function TokenProvider(credentials) {
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

TokenProvider.prototype.getToken = function(identity, endpointId) {
  var token = new AccessToken(this.accountSid, this.signingKeySid, this.signingKeySecret, {
    identity: identity,
    ttl: 40000
  });

  var grant = new ChatGrant({ pushCredentialSid: this.pushCredentialSid });

  grant.serviceSid = this.serviceSid;
  grant.endpointId = this.serviceSid + identity + endpointId;
  token.addGrant(grant);

  return token.toJwt();
};

module.exports = TokenProvider;