import React, { Component } from 'react';
import {Button, List, ListItem, Divider } from 'react-native-elements'
import { getSettings, updateSettings } from '../router/api.js';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableHighlight,
  Image,
  Slider,
} from 'react-native';

//Method for logging out.
import { onSignOut } from '../auth.js';

import { lightGrey,
    backerBlue,
    makerPurple,
    checkGreen,
    noRed,
    buttonRed,
    backGroundWhite,
 } from '../assets/styles/colors.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: backGroundWhite,

    },
    settingsSection: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
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
    dividerStyle: {
        backgroundColor: lightGrey,
        marginTop: 10,
        marginBottom: 10,
    },
    switchSetting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
    },
    switchText: {
        marginTop: 5,
        fontSize: 16,
    },
    locationContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 40,
    },
    locationTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    locationText: {
            fontSize: 16,
    },
    sliderStyle: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        flexDirection: 'row',
    },
    radiusText: {
            alignItems: 'center',
            fontSize: 16,
    },
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 15,
    },
    buttonContainerStyle: {
        marginBottom: 15,
    },
    buttonStyle: {
        width: 250,
    },
});

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    const { navigate } = this.props.navigation;
    this.state = {distance: 10, trueSwitchIsOn: true, blockedUsers: []}
  }
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user} Settings`
  });

  componentDidMount() {
    const {email} = this.props.navigation.state.params
    getSettings(email)
      .then((data) => {
        //console.log("118" + data.isvisible == "true");
        this.setState({visibleSwitch: data.isVisible})
      })
  }

  userDoneEditing(value)  {
    const {email} = this.props.navigation.state.params
    updateSettings(email, [], this.state.visibleSwitch);
  }

  getVisibleSwitch() {
    //console.log("129" + this.state.visibleSwitch)
    return this.state.visibleSwitch;
  }

  render() {
    const { navigate } = this.props.navigation

      return (

      <ScrollView style={styles.container}>

          <Text style={styles.headerText}>
              General Settings
          </Text>

          <Divider style={styles.dividerStyle}/>

          <View style={styles.switchSetting}>
                <Text style={styles.switchText}>
                  Message Notifications
                </Text>
                <Switch
                  onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                  value={this.state.trueSwitchIsOn} />
          </View>

          <Divider style={styles.dividerStyle}/>

          <View style={styles.switchSetting}>
             <Text style={styles.switchText}>
              Visible to other users
            </Text>

              <Switch
                onValueChange={ (value) => this.setState({visibleSwitch: value })}
                value={this.getVisibleSwitch()}
              />

          </View>

          <Divider style={styles.dividerStyle}/>

          <Text style={styles.headerText}>
              Location Settings
          </Text>

          <Divider style={styles.dividerStyle}/>

          <View style={styles.locationContainer}>
            <View style={styles.locationTextContainer}>
                <Text style={styles.locationText}>
                    Current location:
                </Text>
                <Text style={styles.locationText}>
                    San Diego, CA
                </Text>
            </View>

              <Slider
                step={5}
                minimumValue={10}
                maximumValue={100}
                value={this.state.distance}
                onValueChange={(value) => this.setState({distance:value})} />

                <Text style={styles.radiusText}>
                    Current radius: {this.state.distance}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                  style={styles.buttonStyle}
                  textStyle={{fontFamily: 'gotham-rounded', fontSize: 16}}
                  borderRadius={10}
                  activeOpacity={0.5}
                  backgroundColor={buttonRed}
                  icon={{name: 'logout-variant', type: 'material-community' }}
                  title= 'Log Out'
                  onPress={()=> navigate('SignedOut')}
                  containerViewStyle={styles.buttonContainerStyle}
                />

                <Button
                  style={styles.buttonStyle}
                  textStyle={{fontFamily: 'gotham-rounded', fontSize: 16}}
                  borderRadius={10}
                  activeOpacity={0.5}
                  backgroundColor={buttonRed}
                  icon={{name: 'delete', type: 'material-community'}}
                  title= 'Delete Account'
                  containerViewStyle={styles.buttonContainerStyle}
                />
            </View>
        <Button
          width={85}
          height={85}
          activeOpacity={0.5}
          title = 'Save'
          onPress={()=> this.userDoneEditing()}
        />
        </ScrollView>

    )
  }
}

export default SettingsScreen;
