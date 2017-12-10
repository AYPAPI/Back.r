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

const getChannels = function(name, email) {
  return fetch( url + 'twilio/channels?name=' + name + '&identity=' + email + '&endpointId=9998', {
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
  makerIcon: {
      color: makerPurple,
      margin: 15,
      fontSize: headerIconSize,
  },
  backerIcon: {
      color: backerBlue,
      margin: 15,
      fontSize: headerIconSize,
  },
  container: {
      backgroundColor: backGroundWhite,
  },
  header: {
      flexDirection: 'row',
      alignItems: 'flex-start',
  },
  makerText: {
      fontSize: 20,
      fontFamily: 'gotham-rounded',
      alignItems: 'flex-start',
      color: makerPurple,
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
  },
  backerText: {
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
  const { name, email, isMaker } = navigation.state.params

  return {
     headerLeft: (
      <Icon
        name='face'
        type='material-community'
        iconStyle={styles.headerIcon}
        onPress={ () => navigation.goBack() }
      />
    ),
    headerTitle: (
      <Icon
        name='lightbulb-outline'
        type='material-community'
        iconStyle={styles.headerIcon}
        onPress={ () => navigation.navigate("Explore", {name: name, email: email, isMaker:isMaker}) }
      />
    ),
    headerRight: (
      <Icon
        name='message-text-outline'
        type='material-community'
        iconStyle = {[styles.backerIcon, isMaker && styles.makerIcon]}
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
    const {name, email} = this.props.navigation.state.params

    getChannels(name, email).then((res) => {
      if (res != null) {
        self.setState({ "users": res.channels })
        console.log(this.state.users)
      }
    })
  }

  render() {

    const { navigate } = this.props.navigation;
    const {name, email, isMaker} = this.props.navigation.state.params

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
              <Text style={[styles.backerText, isMaker && styles.makerText]}>
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
                  activeOpacity={0.5}
        		  onPress={() => navigate("Thread", {name: name, email: email, other_user: u.other_user, unique_name:u.unique_name})}
                />
              );
            })
          }
      </ScrollView>
    );
  }
}

export default MatchesScreen;
