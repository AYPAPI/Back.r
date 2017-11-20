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
