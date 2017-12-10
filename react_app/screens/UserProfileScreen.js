import React, { Component } from 'react';
import { Text,
    Button,
    Image,
    View,
    ScrollView,
    StyleSheet,
    Card } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import {getBacker, getMaker, getUser} from '../router/api.js';

import { lightGrey,
    backerBlue,
    makerPurple,
    checkGreen,
    noRed,
    backGroundWhite } from '../assets/styles/colors.js';

import { headerIconSize } from '../assets/styles/size.js';

var profilePhoto = require('../assets/images/shuttle-01.jpg');

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const styles = {
    headerIcon: {
      color: lightGrey,
      margin: 15,
      fontSize: headerIconSize,
    },
  container: {
      flexDirection: 'column',
      backgroundColor: backGroundWhite,
  },
  avatarContainer: {
      alignItems: 'center',
      zIndex: 0,
  },
  descriptionContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
  },
  subTitleContainer: {
      flexDirection: 'row',
  },
  makerTitle: {
      fontSize: 18,
      color: makerPurple,
      fontFamily: 'gotham-rounded',
  },
  backerTitle: {
      fontSize: 18,
      color: backerBlue,
      fontFamily: 'gotham-rounded',
  },
  subtitleText: {
      fontSize: 14,
      fontFamily: 'gotham-rounded',
  },
  iconsContainer: {
      flexDirection: 'row',
      marginLeft: 10,
  },
  iconStyle: {
    marginRight: 3,
  },
  bioContainer: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
  },
  bioText: {
      fontSize: 16,
      textAlign: 'justify',
  },
};

class UserProfileScreen extends Component {
    static navigationOptions = ({ navigation }) => {};
  render() {

    const { navigate } = this.props.navigation;
    const {userEmail, userName, userIsMaker, title, longbio, icons} =
              this.props.navigation.state.params

    return (
      <ScrollView style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar
                width={window.width}
                height={window.width}
                source={profilePhoto}/>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={[styles.backerTitle, userIsMaker && styles.makerTitle]}>
                    {title}
                </Text>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subtitleText}>
                        {userName}
                    </Text>
                    <View style={styles.iconsContainer}>
                    { icons[0] && (
                        <Icon iconStyle={styles.iconStyle}
                        name='circle-o'
                        type='font-awesome'
                        color='#59C129'
                        size={15}
                        onPress={() => alert("Money")} />
                      )}
                    { icons[1] && (
                      <Icon iconStyle={styles.iconStyle}
                      name='circle-o'
                      type='font-awesome'
                      color='#EF2074'
                      size={15}
                      onPress={() => alert("Money")} />
                      )}
                      { icons[2] && (
                        <Icon iconStyle={styles.iconStyle}
                        name='circle-o'
                        type='font-awesome'
                        color='#FC8A2D'
                        size={15}
                        onPress={() => alert("Money")} />
                        )}
                      { icons[3] && (
                        <Icon iconStyle={styles.iconStyle}
                        name='circle-o'
                        type='font-awesome'
                        color='#57C4DD'
                        size={15}
                        onPress={() => alert("Money")} />
                        )}
                    </View>
                </View>
            </View>

            <View style={styles.bioContainer}>
                <Text style={styles.bioText}>
                  {longbio}
                </Text>
            </View>
        </ScrollView>
    );
  }
}

export default UserProfileScreen;
