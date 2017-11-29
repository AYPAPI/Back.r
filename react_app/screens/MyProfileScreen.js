import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Icon, Button} from 'react-native-elements';


//Method for logging out.
import { onSignOut } from '../auth.js';

var profilePhoto = require('../img/gary_mouse.png');
var backerBlue = '#57C4DD';
var darkBlue = '#58A6DB';
var makerPurple = '#C753E0';
var lightGrey = '#BFBFBF';

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
    flex: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
  },
  textContainer:{
      flexDirection: 'column',
      alignItems: 'center',
  },
  nameContainer: {
    fontSize: 24,
    marginTop: 10,
  },
  descriptionContainer: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 15,
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 15,
  },
  buttonContainerStyle: {
      height: 45,
      backgroundColor: darkBlue,
  },
  buttonStyle: {
      width: 250,
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
                      width={220}
                      height={220}
                      activeOpacity={0.7}
                      source={profilePhoto}
                      onPress={()=>navigate('UserProfile',
                                            {user:'yourOwnProfile'})}
                      overlayContainerStyle={{height: 225,
                                              width: 225,
                                              borderRadius: 110,
                                              borderWidth: 3,
                                              borderColor: lightGrey}}
                      />
              </View>

            <View style={styles.iconContainer}>

                <Icon
                    size={20}
                    name= 'school'
                    type='MaterialCommunityIcons'/>

                <Icon
                    size={20}
                    name= 'attach-money'
                    type='MaterialCommunityIcons'/>

                <Icon
                    size={20}
                    name= 'group'
                    type='MaterialCommunityIcons'/>

                <Icon
                    size={20}
                    name= 'work'
                    type='MaterialCommunityIcons'/>

                <Icon
                    size={20}
                    name= 'gavel'
                    type='MaterialCommunityIcons'/>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.nameContainer}>
                  Computer Science Lecturer
              </Text>
              <Text style={styles.descriptionContainer}>
                  Gary Gillespie
              </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                  style={styles.buttonStyle}
                  borderRadius={10}
                  backgroundColor={backerBlue}
                  icon={{name: 'settings', type: 'MaterialIcons'}}
                  title= 'Edit Account Settings'
                  onPress={()=> navigate('Settings')}
                  containerViewStyle={styles.buttonContainerStyle}
                />

                <Button
                  style={styles.buttonStyle}
                  borderRadius={10}
                  backgroundColor={backerBlue}
                  icon={{name: 'edit', type: 'MaterialCommunityIcons' }}
                  title= 'Edit Profile'
                  onPress={()=> navigate('Edit')}
                  containerViewStyle={styles.buttonContainerStyle}
                />

                <Button
                  style={styles.buttonStyle}
                  borderRadius={10}
                  backgroundColor={backerBlue}
                  icon={{name: 'replay', type: 'MaterialCommunityIcons'}}
                  title= 'Switch Profile'
                  containerViewStyle={styles.buttonContainerStyle}
                />
            </View>
          </View>

      );
  }
}

export default MyProfileScreen;
