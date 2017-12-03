import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Icon, Button} from 'react-native-elements';
import { getMaker, getBacker } from '../router/api.js';

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
    manpowerRed,
    backGroundWhite } from '../assets/styles/colors.js';

import { headerIconSize } from '../assets/styles/size.js';

import FlipCard from 'react-native-flip-card'

var profilePhoto = require('../assets/images/shuttle-01.jpg');

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

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
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: backGroundWhite,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
    flex: 1,
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
  titleStyle: {
    fontSize: 20,
    marginTop: 5,
    fontFamily: 'gotham-rounded',
    color: backerBlue,
  },
  subTitleStyle: {
    fontSize: 16,
    fontFamily: 'gotham-rounded',
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
};

class MyProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      makerBacker: {}
    }
  }

  static navigationOptions = ({ navigation }) => {
      const { name, email, isMaker } = navigation.state.params


      return {
          headerLeft: (
                <Icon
                    name='face'
                    type='material-community'
                    iconStyle={styles.activeIcon}
                    />
              ),
            headerTitle: (
                <Icon
                    name='lightbulb-outline'
                    type='material-community'
                    iconStyle={styles.headerIcon}
                    onPress={ () => navigation.navigate("Explore", {name: name, email: email, isMaker: isMaker}) }
                    />
            ),
            headerRight: (
                <Icon
                    name='message-text-outline'
                    type='material-community'
                    iconStyle={styles.headerIcon}
                    onPress={ () => navigation.navigate("Matches", {name: name, email: email, isMaker: isMaker}) }
                    />
            ),
      };
};

  componentDidMount() {
    const { name, email, isMaker } = this.props.navigation.state.params

    if(isMaker) {
      this.setState({"makerBacker": getMaker(email)})
    } else {
      console.log(getBacker(email));
      this.setState({"makerBacker": getBacker(email)});
    }
    console.log("maker or backer" + isMaker);
    console.log("maker or backer name: " + this.state.makerBacker.email)
  }

  render() {

    const { navigate } = this.props.navigation;
    const { name, email, isMaker } = this.props.navigation.state.params;

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
                              />
                      </View>

                      <View style={styles.iconsContainer}>
                          <Icon iconStyle={styles.iconStyle}
                              name='circle-o'
                              type='font-awesome'
                              color={moneyGreen}
                              size={15}
                              onPress={() => alert("Money")} />
                          <Icon iconStyle={styles.iconStyle}
                              name='circle-o'
                              type='font-awesome'
                              color={materialsOrange}
                              size={15}
                              onPress={() => alert("Materials")} />
                          <Icon iconStyle={styles.iconStyle}
                              name='circle-o'
                              type='font-awesome'
                              color={knowledgePurple}
                              size={15}
                              onPress={() => alert("Knowledge")} />
                          <Icon iconStyle={styles.iconStyle}
                              name='circle-o'
                              type='font-awesome'
                              color={manpowerRed}
                              size={15}
                              onPress={() => alert("Manpower")} />
                          <Icon iconStyle={styles.iconStyle}
                              name='circle-o'
                              type='font-awesome'
                              color={backerBlue}
                              size={15}
                              onPress={() => alert("Collaboration")} />
                      </View>

                    <View style={styles.textContainer}>
                      <Text style={styles.titleStyle}>
                          Biology/Comp Sci Student
                      </Text>
                      <Text style={styles.subTitleStyle}>
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
                          title= 'Edit Backer Profile'
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
                          title= 'Switch to Maker'
                        />
                    </View>
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
                  onPress={()=> ('Settings', {user: this.props.navigation.state.params.user})}
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

=======
>>>>>>> 67263dea0e6677d289e02631fc94aa56d3a479d5
      );
  }
}

export default MyProfileScreen;
