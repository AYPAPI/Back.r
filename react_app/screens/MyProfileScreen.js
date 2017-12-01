import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Icon, Button} from 'react-native-elements';

//Method for logging out.
import { onSignOut } from '../auth.js';

import { lightGrey,
    backerBlue,
    makerPurple,
    checkGreen,
    noRed,
    moneyGreen,
    materialsOrange,
    knowledgePurple,
    manpowerRed } from '../assets/styles/colors.js';

var profilePhoto = require('../assets/images/shuttle-01.jpg');

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const styles = StyleSheet.create({
  headerIcon: {
    margin: 15,
    fontSize: 30,
  },
  titleMaker: {
    margin: 15,
    fontSize: 40,
    color: lightGrey,
  },
  titleBacker: {
    margin: 15,
    fontSize: 40,
    color: lightGrey,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  avatarOverlay: {
      height: window.width-50,
      width: window.width-50,
    borderRadius: (window.width-50)/2,
    borderWidth: 3,
    borderColor: lightGrey
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    },
    iconStyle: {
        marginLeft: 2,
        marginRight: 2,
    },
  textContainer:{
      flexDirection: 'column',
      alignItems: 'center',
  },
  nameContainer: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'gotham-rounded',
  },
  descriptionContainer: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonContainerStyle: {
      marginBottom: 20,
  },
  buttonStyle: {
      width: window.width - 100,
  },
  buttonText: {
      fontFamily: 'gotham-rounded',
      fontSize: 16,
  },
});

class MyProfileScreen extends Component {

  static navigationOptions = ({ navigation }) => {
  const { user } = navigation.state.params;

  return {
    headerTitle: (
      <Icon
        name='lightbulb-outline'
        type='material-community'
        iconStyle={styles.titleMaker}
        onPress={ () => navigation.navigate("Explore", {user: user}) }
      />
    ),
    headerRight: (
      <Icon
        name='message-text-outline'
        type='material-community'
        iconStyle={styles.headerIcon}
        color='#BFBFBF'
        onPress={ () => navigation.navigate("Matches", {user: user}) }
      />
    ),
    headerLeft: (
        <Icon
          name='face'
          type='material-community'
          color='#57C4DD'
          iconStyle={styles.headerIcon}
        />
    ),
  };
};

  render() {

    const { navigate } = this.props.navigation;

      return (
          <View style={styles.container}>
              <View style={styles.avatarContainer}>
                  <Avatar
                      rounded
                      width={window.width - 55}
                      height={window.width - 55}
                      activeOpacity={0.7}
                      source={profilePhoto}
                      onPress={()=>navigate('UserProfile',
                                            {user:'yourOwnProfile'})}
                      overlayContainerStyle={styles.avatarOverlay}
                      />
              </View>

              <View style={styles.iconsContainer}>
                  <Icon iconStyle={styles.iconStyle}
                  name='circle-o'
                  type='font-awesome'
                  color='#59C129'
                  size={15}
                  onPress={() => alert("Money")} />
                  <Icon iconStyle={styles.iconStyle}
                  name='circle-o'
                  type='font-awesome'
                  color='#EF2074'
                  size={15}
                  onPress={() => alert("Money")} />
                  <Icon iconStyle={styles.iconStyle}
                  name='circle-o'
                  type='font-awesome'
                  color='#FC8A2D'
                  size={15}
                  onPress={() => alert("Money")} />
                  <Icon iconStyle={styles.iconStyle}
                  name='circle-o'
                  type='font-awesome'
                  color='#57C4DD'
                  size={15}
                  onPress={() => alert("Money")} />
              </View>

            <View style={styles.textContainer}>
              <Text style={styles.nameContainer}>
                  Biology/Comp Sci Student
              </Text>
              <Text style={styles.descriptionContainer}>
                  David Owens
              </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                  style={styles.buttonStyle}
                  containerViewStyle={styles.buttonContainerStyle}
                  textStyle={styles.buttonText}
                  borderRadius={10}
                  activeOpacity={0.5}
                  backgroundColor={backerBlue}
                  icon={{name: 'settings', type: 'MaterialIcons'}}
                  title= 'Edit Account Settings'
                  onPress={()=> navigate('Settings', {user: this.props.navigation.state.params.user})}
                />

                <Button
                  style={styles.buttonStyle}
                  containerViewStyle={styles.buttonContainerStyle}
                  textStyle={styles.buttonText}
                  borderRadius={10}
                  activeOpacity={0.5}
                  backgroundColor={backerBlue}
                  icon={{name: 'edit', type: 'MaterialCommunityIcons' }}
                  title= 'Edit Profile'
                  onPress={()=> navigate('Edit')}
                />

                <Button
                  style={styles.buttonStyle}
                  containerViewStyle={styles.buttonContainerStyle}
                  textStyle={styles.buttonText}
                  borderRadius={10}
                  activeOpacity={0.5}
                  backgroundColor={backerBlue}
                  icon={{name: 'replay', type: 'MaterialCommunityIcons'}}
                  title= 'Switch Profile'
                />
            </View>
          </View>

      );
  }
}

export default MyProfileScreen;
