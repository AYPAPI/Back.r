import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
	Image, ScrollView,
} from 'react-native';
import {
	Card, ListItem, Icon
} from 'react-native-elements'

const twilio = require('twilio');

const AccessToken = twilio.jwt.AccessToken;
const IpMessagingGrant = AccessToken.IpMessagingGrant;
var client

function TokenGenerator(identity, deviceId) {
  fingerprint.get(function(endpointId) {
    request('/getToken?identity=' + identity + '&endpointId=' + endpointId, function(err, res) {
      if (err) { throw new Error(res.text); }

      var token = res.text;

      userContext.identity = identity;
      userContext.endpoint = endpointId;

      $('#login').hide();
      $('#overlay').hide();

      client = new Twilio.Chat.Client(token, { logLevel: 'debug' });

      accessManager = new Twilio.AccessManager(token);
      accessManager.on('tokenUpdated', am => client.updateToken(am.token));
      accessManager.on('tokenExpired', () => {
        request('/getToken?identity=' + identity + '&endpointId=' + endpointId, function(err, res) {
          if (err) {
            console.error('Failed to get a token ', res.text);
            throw new Error(res.text);
          }
          console.log('Got new token!', res.text);
          accessManager.updateToken(res.text);
        });
      })

      $('#profile label').text(client.user.friendlyName || client.user.identity);
      $('#profile img').attr('src', 'http://gravatar.com/avatar/' + MD5(identity) + '?s=40&d=mm&r=g');

      client.user.on('updated', function() {
        $('#profile label').text(client.user.friendlyName || client.user.identity);
      });

      var connectionInfo = $('#profile #presence');
      connectionInfo
        .removeClass('online offline connecting denied')
        .addClass(client.connectionState);
      client.on('connectionStateChanged', function(state) {
        connectionInfo
          .removeClass('online offline connecting denied')
          .addClass(client.connectionState);
      });

      client.getSubscribedChannels().then(updateChannels);

      client.on('channelJoined', function(channel) {
        channel.on('messageAdded', updateUnreadMessages);
        channel.on('messageAdded', updateChannels);
        updateChannels();
      });

      client.on('channelInvited', updateChannels);
      client.on('channelAdded', updateChannels);
      client.on('channelUpdated', updateChannels);
      client.on('channelLeft', leaveChannel);
      client.on('channelRemoved', leaveChannel);
    });
  });
}

module.exports = { generate: TokenGenerator };

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
	  message: "hey hot stuff"
 },{
    name: 'brandon',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },{
    name: 'andrew',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
	  message: "hey hottie u down to be my thottie ;)"
 },{
    name: 'sarah',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },{
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
]

class MatchesScreen extends Component {
  static navigationOptions = {
    title: "My Matches"
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
      <Button
          onPress={() => navigate("Thread", {receiver: "insertuserhere"})}
          title="Message Thread"
          buttonStyle={{ marginTop: 20 }}
      />
		<Card containerStyle={{padding: 0}} >
  {
    users.map((u, i) => {
      return (
        <ListItem
          key={i}
          roundAvatar
          title={u.name}
          avatar={{uri:u.avatar}}
		  subtitle={u.message}
			onPress={() => navigate("Thread", {receiver: "insertuserhere"})}
        />
      );
    })
  }
</Card>

      </ScrollView>
    );
  }
}

export default MatchesScreen;
