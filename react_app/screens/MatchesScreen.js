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
const url = "https://backr.herokuapp.com/"
const getChannels = function() {
  return fetch( url + 'twilio/channels?identity=vylana&endpointId=9998', {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    }
  }).then(function(response) {
    return response.json()
  })
}

// const users = [
//  {
//     name: 'brynn',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
// 	 message: "hey hot stuff"
//  },{
//     name: 'brandon',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
//  },{
//     name: 'andrew',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
// 	 message: "hey hottie u down to be my thottie ;)"
//  },{
//     name: 'sarah',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
//  },{
//     name: 'brynn',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
//  },
// ]

const styles = {
  headerIcon: {
    margin: 15,
    fontSize: 30
  },
  maker: {
    color: '#75c9f9'
  },
  backer: {
    color: '#c753e0'
  },
  titleMaker: {
    color: '#75C9F9',
    margin: 15,
    fontSize: 40
  },
  titleBacker: {
    color: '#C753E0',
    margin: 15,
    fontSize: 40
  }
};


class MatchesScreen extends Component {

  static navigationOptions = ({ navigation }) => {
  user = navigation.state.params;

  return {
    headerTitle: (
      <Icon
        name='lightbulb'
        type='material-community'
        iconStyle={styles.titleMaker}
        //onPress={ () => navigation.navigate("Explore", {user: user}) }
        onPress={() => navigation.goBack()}
      />
    ),
    headerRight: (
      <Icon
        name='message-text-outline'
        type='material-community'
        iconStyle={styles.headerIcon}
        color='#75C9F9'
      />
    ),
    headerLeft: (
        <Icon
          name='user-o'
          type='font-awesome'
          color='#999999'
          iconStyle={styles.headerIcon}
          onPress={ () => navigation.navigate("MyProfile", {user: user, type: ""}) }
        />
    ),
  };
};

constructor(props) {
  super(props);
  this.state = {
    isLoading: true,
    users: []
  }
}
  componentDidMount() {
    const self = this
    getChannels().then(function(res) {
      if (res != null) {
        self.setState({ "users": res.channels })
        console.log(users)
      }
    })
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
      <Button
          onPress={() => navigate("Thread", {user: user, other_user: ""})}
          title="Message Thread"
          buttonStyle={{ marginTop: 20 }}
      />
		<Card containerStyle={{padding: 0}} >
  {
    this.state.users.map((u, i) => {
      return (
        <ListItem
          key={i}
          roundAvatar
          title={u.other_user}
          avatar={{uri:u.avatar}}
		  subtitle={u.message}
			onPress={() => navigate("Thread", {user: user, other_user: u.other_user, unique_name:u.unique_name})}
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
