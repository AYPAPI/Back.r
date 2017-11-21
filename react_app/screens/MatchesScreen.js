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
var fingerprint = new Fingerprint2();
var client

function generateToken(identity){
  const AccessToken = require('twilio').jwt.AccessToken;
  const ChatGrant = AccessToken.ChatGrant;

  // Used when generating any kind of tokens
  const twilioAccountSid = 'ACdb1667840757150db3f20d6c72432db0';
  const twilioApiKey = 'SKbc53d3e592df06fb1edea8157432130c';
  const twilioApiSecret = '8AxjAtZV8iOK0reOaFUlVNVrYWE7ZPI6';

  // Used specifically for creating Chat tokens
  const serviceSid = 'IS608dc1a183314b68b550a97d6db6006a';
  const appName = 'Backr';
  const deviceId = 'unique id for device,possible use shortid module';
  const endpointId = `${appName}:${identity}:${deviceId}`;

  // Create a "grant" which enables a client to use Chat as a given user,
  // on a given device
  const chatGrant = new ChatGrant({
      serviceSid: serviceSid,
      endpointId: endpointId,
  });

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret);

  token.addGrant(chatGrant);

  token.identity = identity;

  // Serialize the token to a JWT string
  console.log(token.toJwt());
  //initialize client
  client = new Twilio.Chat.Client(token);
}

function getChannels(){
  const serviceSid = 'IS608dc1a183314b68b550a97d6db6006a';
  const service = client.chat.services(serviceSid); 
	service.channels
  .list()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
}

function getMessages(channel){
  const serviceSid = 'IS608dc1a183314b68b550a97d6db6006a';
  const service = client.chat.services(serviceSid); 
	service.channels(channel).messages.list().then(function(response) {
    console.log(response);
	}).catch(function(error) {
    console.log(error);
	});
}

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
