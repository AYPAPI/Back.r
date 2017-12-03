import React, { Component } from 'react';
import { Text,
    TextInput,
    Button,
    Switch,
    View,
    ScrollView,
    StyleSheet,
KeyboardAvoidingView } from 'react-native';

import { Avatar, Divider, Icon } from 'react-native-elements';

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

var profilePhoto = require('../assets/images/cannon_beach-01.jpg');

const styles = {
  headerIcon: {
    margin: 15,
    fontSize: headerIconSize,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: backGroundWhite,
  },
  editPhotosContainer: {
      flexDirection: 'column',
  },
  photosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 35,
    marginLeft: 20,
  },
  subPhotosContainer: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginRight: 20,
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
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  labelAndIcon: {
      flexDirection: 'row',
      alignItems: 'flex-start',
  },
  iconStyle: {
      marginTop: 8,
      marginLeft: 5,
  },
  inputText: {
      fontSize: 14,
      fontStyle: 'italic',
      marginLeft: 10,
      marginBottom: 5,
  },
  inputStyle: {
      borderRadius: 5,
      marginRight: 10,
      marginLeft: 10,
      height: 40,
      borderColor: lightGrey,
      borderWidth: 1,
      fontSize: 16,
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
};

class EditScreen extends Component {
  static navigationOptions = {
    title: "Edit Profile"
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.editPhotosContainer}>
          <Text style={styles.headerText}>
              Edit Profile Photos
          </Text>
          <View style={styles.photosContainer}>
              <Avatar
                  rounded
                  width={175}
                  height={175}
                  activeOpacity={0.5}
                  source={profilePhoto}
                  onPress={()=>navigate()}
                  />
                <View style={styles.subPhotosContainer}>
                  <Avatar
                      rounded
                      width={85}
                      height={85}
                      activeOpacity={0.5}
                      source={require('../assets/images/shuttle-01.jpg')}
                      onPress={()=>navigate()}
                      />
                  <Avatar
                      rounded
                      width={85}
                      height={85}
                      activeOpacity={0.5}
                      icon={{name:'camera', type:'material-community', size: 30}}
                      onPress={()=>navigate()}
                      />
                  </View>
          </View>

          <Text style={styles.headerText}>
              Tell us about yourself
          </Text>

          <Text style={styles.inputText}>
              Your title...
          </Text>

          <TextInput style={styles.inputStyle}
          maxLength={30}/>

          <Text style={styles.inputText}>
              Your name...
          </Text>

          <TextInput style={styles.inputStyle}
          maxLength={30}/>

          <Text style={styles.inputText}>
              A quick description...
          </Text>

          <TextInput style={styles.inputStyle}
            multiline={true}
            autoCorrect={true}
            height={100}
            maxLength={160}/>

            <Text style={styles.inputText}>
                An in-depth description...
            </Text>

            <TextInput style={styles.inputStyle}
              multiline={true}
              autoCorrect={true}
              height={200}/>

          <Text style={styles.headerText}>
              How can you help?
          </Text>

          <Divider style={styles.dividerStyle}/>

          <View style={styles.switchSetting}>
            <View style={styles.labelAndIcon}>
                 <Text style={styles.switchText}>
                  Money
                </Text>
                <Icon iconStyle={styles.iconStyle}
                name='circle-o'
                type='font-awesome'
                color={moneyGreen}
                size={15}
                onPress={() => alert("Money")} />
            </View>
            <Switch
              onValueChange={(value) => this.setState()}/>
          </View>

          <Divider style={styles.dividerStyle}/>
          <View style={styles.switchSetting}>
            <View style={styles.labelAndIcon}>
                <Text style={styles.switchText}>
                  Materials
                </Text>
                <Icon iconStyle={styles.iconStyle}
                name='circle-o'
                type='font-awesome'
                color={materialsOrange}
                size={15}
                onPress={() => alert("Money")} />
            </View>
            <Switch
              onValueChange={(value) => this.setState()}/>
          </View>

          <Divider style={styles.dividerStyle}/>
          <View style={styles.switchSetting}>
            <View style={styles.labelAndIcon}>
                <Text style={styles.switchText}>
                  Knowledge
                </Text>
                <Icon iconStyle={styles.iconStyle}
                name='circle-o'
                type='font-awesome'
                color={knowledgePurple}
                size={15}
                onPress={() => alert("Money")} />
            </View>
            <Switch
              onValueChange={(value) => this.setState()}/>
          </View>

          <Divider style={styles.dividerStyle}/>
          <View style={styles.switchSetting}>
            <View style={styles.labelAndIcon}>
                <Text style={styles.switchText}>
                  Manpower
                </Text>
                <Icon iconStyle={styles.iconStyle}
                name='circle-o'
                type='font-awesome'
                color={manpowerRed}
                size={15}
                onPress={() => alert("Money")} />
            </View>
            <Switch
              onValueChange={(value) => this.setState()}/>
          </View>

          <Divider style={styles.dividerStyle}/>
          <View style={styles.switchSetting}>
            <View style={styles.labelAndIcon}>
                <Text style={styles.switchText}>
                  Collaborators
                </Text>
                <Icon iconStyle={styles.iconStyle}
                name='circle-o'
                type='font-awesome'
                color={backerBlue}
                size={15}
                onPress={() => alert("Money")} />
            </View>
            <Switch
              onValueChange={(value) => this.setState()}/>
          </View>

          <Divider style={styles.dividerStyle}/>

        </View>
      </ScrollView>
    );
  }
}

export default EditScreen;
