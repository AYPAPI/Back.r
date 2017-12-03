import React, { Component } from 'react';

import {
  Text,
  Button,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import { Card, Divider, Icon, ListItem } from 'react-native-elements'

import { lightGrey,
    backerBlue,
    makerPurple,
    checkGreen,
    noRed,
    backGroundWhite } from '../assets/styles/colors.js';

import { headerIconSize } from '../assets/styles/size.js';

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

var decoration = require('../assets/images/matches_decorations-02.png');

const styles = {
  headerIcon: {
    color: lightGrey,
    margin: 15,
    fontSize: headerIconSize,
  },
  activeIcon: {
      color: backerBlue,
      margin: 15,
      fontSize: headerIconSize,
  },
  maker: {
    color: '#75c9f9'
  },
  backer: {
    color: '#c753e0'
  },
  titleMaker: {
    color: lightGrey,
    margin: 15,
    fontSize: 40
  },
  titleBacker: {
    color: '#C753E0',
    margin: 15,
    fontSize: 40
  },
  container: {
      backgroundColor: backGroundWhite,
  },
  header: {
      flexDirection: 'row',
      alignItems: 'flex-start',
  },
  headerText: {
      fontSize: 20,
      fontFamily: 'gotham-rounded',
      alignItems: 'flex-start',
      color: backerBlue,
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
  },
  decoratorImageStyle: {
      width: 100,
      height: 25,
      marginTop: 17,
      marginLeft: 5
  },
  dividerStyle: {
      backgroundColor: lightGrey,
      marginTop: 10,
  },
};


class MatchesScreen extends Component {

  static navigationOptions = ({ navigation }) => {
  user = navigation.state.params;

  return {
     headerLeft: (
      <Icon
        name='face'
        type='material-community'
        iconStyle={styles.headerIcon}
        onPress={ () => navigation.navigate("MyProfile", {user: user, type: ""}) }
      />
    ),
    headerTitle: (
      <Icon
        name='lightbulb-outline'
        type='material-community'
        iconStyle={styles.headerIcon}
        onPress={ () => navigation.navigate("Explore", {user: user}) }
      />
    ),
    headerRight: (
      <Icon
        name='message-text-outline'
        type='material-community'
        iconStyle={styles.activeIcon}
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
      <ScrollView style={styles.container}>
      {/*<Button
          onPress={() => navigate("Thread", {user: user, other_user: ""})}
          title="Message Thread"
          buttonStyle={{ marginTop: 20 }}
      />*/}

          <View style={styles.header}>
              <Text style={styles.headerText}>
                  Matches
              </Text>
              <Image
                  source={decoration}
                  style={styles.decoratorImageStyle}
              />
          </View>
          <Divider style={styles.dividerStyle}/>

          {
            this.state.users.map((u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.other_user}
                  fontFamily={'gotham-rounded'}
                  avatar={{uri:u.avatar}}
        		  subtitle={u.message}
        		  onPress={() => navigate("Thread", {user: user, other_user: u.other_user, unique_name:u.unique_name})}
                />
              );
            })
          }
      </ScrollView>
    );
  }
}

export default MatchesScreen;
