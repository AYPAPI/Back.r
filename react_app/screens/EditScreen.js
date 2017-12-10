import React, { Component } from 'react';
import { Text,
    TextInput,
    Button,
    Switch,
    View,
    ScrollView,
    StyleSheet,
    Alert,
KeyboardAvoidingView } from 'react-native';
import { ImagePicker } from 'expo';
import firebase from 'firebase';
import { updateProfile,
    updateMakerProfile,
    updateBackerProfile,
    updateSettings,
    updateIsMaker,
    getMaker,
    getBacker,
  getUser } from '../router/api.js';

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



//this.setState({ myArray: [...this.state.myArray, ...[1,2,3] ] })
var photosToAdd = []

var profilePhoto = require('../assets/images/cannon_beach-01.jpg');
async function UploadPhoto(){
  let result = await ImagePicker.launchImageLibraryAsync({
    base64: true
  });
  var imageString = result.base64;
  photosToAdd.push(imageString)
  //to display the image use:  source={{uri:"data:image/png;base64," + imageString}}
}

const styles = {
  headerIcon: {
    color: lightGrey,
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
  backerText: {
      fontSize: 20,
      fontFamily: 'gotham-rounded',
      alignItems: 'flex-start',
      color: backerBlue,
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
  },
  makerText: {
      fontSize: 20,
      fontFamily: 'gotham-rounded',
      alignItems: 'flex-start',
      marginTop: 20,
      color: makerPurple,
      marginLeft: 10,
      marginRight: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  photoIcon: {
      name:'camera',
      type:'material-community',
      size: 30
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

var isErr = false
var self = null; //Used to access props/state inside navigation.

class EditScreen extends Component {

  editProfile(shortbio) {
    const { email } = this.props.navigation.state.params

    updateProfile(email, shortbio)

  }

  editMakerBacker(longbio, title) {
    const { email, isMaker } = this.props.navigation.state.params

    let icons = [this.state.money, this.state.materials, this.state.knowledge,
                  this.state.manpower, this.state.collaborators]

    //TODO find some other way to display photos. string too large.
    //var newPhotosArr = this.state.makerBacker.photos

    //  for(var i = 0; i < photosToAdd.length; i++) {
    //  newPhotosArr.push(photosToAdd[i])

    if(isMaker) {
      updateMakerProfile(longbio, [], icons, email, this.state.title)
    } else {
      updateBackerProfile(longbio, [], icons, email, this.state.title)
    }
  }

  userDoneEditing() {
    const { name, email, isMaker } = this.props.navigation.state.params

    this.editProfile(this.state.shortbio)
    this.editMakerBacker(this.state.longbio, this.state.title)

    console.log("inside userDone " + this.state)
    if(isErr) {
      alert("failure for editing data for " + name + ":(")
    } else {
      Alert.alert(
        'Edit Success',
        'Saved changes for ' + name + '!',
        [
          {text: 'Back to Profile', onPress: () => this.props.navigation.navigate('MyProfile', {name: name, email: email, isMaker: isMaker})}
        ],
        { cancelable: false }
      )
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      money: false,
      materials: false,
      knowledge: false,
      manpower: false,
      icons: [],
      name: "",
      collaborators: false,
      longbio: "",
      shortbio: "",
      photos: [],
      title: "",
      makerBacker: {},
      userProfile: {},
    };
  }

  async componentDidMount() {
    const {email, isMaker, name} = this.props.navigation.state.params
    this.setState({"name": name})
    self = this //Set global self for rendering header props.

    //Set userProfile in state to get current name and shortbio.
    await getUser(email)
    .then((data) => {
      this.setState({
        "userProfile": data,
      })
      this.setState({
        "shortbio": data.shortbio
      })
    });

    if(isMaker) {
      await getMaker(email)
      .then((data) => {
        this.setState({
          "longbio": data.longbio,
          "icons": data.icons,
          "makerBacker": data
        })
      });
    } else {
      await getBacker(email)
      .then((data) => {
        this.setState({
          "longbio": data.longbio,
          "icons": data.icons,
          "makerBacker": data
        })
      });
    }
  }

  static navigationOptions = ({ navigation }) => {
  const {isMaker} = navigation.state.params

  var profileText = ""
  if(isMaker) {
    profileText = "Maker"
  } else {
    profileText = "Backer"
  }

  return {
     headerLeft: (
         <Button style={styles.headerIcon}
          title="Back"
          onPress={() => navigation.goBack()}
        />
    ),
    headerTitle: "Edit " + profileText + " Profile",
    headerRight: (
      <Button style={styles.headerIcon}
       title="Done"
       onPress={() => self.userDoneEditing()}
     />
    ),
  };
};

  render() {

    //Declare variables for easier calls
    const { navigate } = this.props.navigation;
    const { isMaker, name, email } = this.props.navigation.state.params;
    var userProfile = this.state.userProfile
    var makerBacker = this.state.makerBacker

    return (
      <ScrollView style={styles.container}>
        <View style={styles.editPhotosContainer}>
          <Text style={[styles.backerText, isMaker && styles.makerText]}>
              Edit Profile Photos
          </Text>
          <View style={styles.photosContainer}>
              <Avatar
                  rounded
                  width={175}
                  height={175}
                  activeOpacity={0.5}
                  source={profilePhoto}
                  icon={styles.photoIcon}
                  onPress={()=>navigate()}
                  />
                <View style={styles.subPhotosContainer}>
                  <Avatar
                      rounded
                      width={85}
                      height={85}
                      activeOpacity={0.5}
                      icon={styles.photoIcon}
                      onPress={()=>navigate()}
                  />
                  <Avatar
                      rounded
                      width={85}
                      height={85}
                      activeOpacity={0.5}
                      icon={styles.photoIcon}
                      onPress={()=>UploadPhoto()}
                      />
                  </View>
          </View>

          <Text style={[styles.backerText, isMaker && styles.makerText]}>
              Tell us about yourself
          </Text>

          <Text style={styles.inputText}>
              Your title...
          </Text>

          <TextInput style={styles.inputStyle}
          maxLength={30}
          onChangeText = {(text) => this.setState({"title":text})}
          value={this.state.title}
          />

          <Text style={styles.inputText}>
              Your name...
          </Text>

          <TextInput style={styles.inputStyle}
          maxLength={30}
          onChangeText = {(text) => this.setState({"name":text})}
          value={this.state.name}
          />

          <Text style={styles.inputText}>
              A quick description...
          </Text>

          <TextInput style={styles.inputStyle}
            multiline={true}
            autoCorrect={true}
            height={100}
            maxLength={160}
            onChangeText = {(text) => this.setState({"shortbio":text})}
            value={ this.state.shortbio }
            />

            <Text style={styles.inputText}>
                An in-depth description...
            </Text>

            <TextInput style={styles.inputStyle}
              multiline={true}
              autoCorrect={true}
              height={200}
              onChangeText = {(text) => this.setState({"longbio":text})}
              value={ this.state.longbio }/>

              {isMaker ? (
                  <Text style={[styles.backerText, isMaker && styles.makerText]}>
                    What do you need?
                  </Text>
              ) : (
                  <Text style={[styles.backerText, isMaker && styles.makerText]}>
                    How can you help?
                  </Text>
              )}

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
              onValueChange={(value) => this.setState({"money": value})}
              value = {this.state.money} />
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
              onValueChange={(value) => this.setState({"materials": value})}
              value = {this.state.materials} />
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
              onValueChange={(value) => this.setState({"knowledge": value})}
            //  value = {this.state.icons[2]}
              value = {this.state.knowledge}/>
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
              onValueChange={(value) => this.setState({"manpower": value})}
              value = {this.state.manpower} />
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
              onValueChange={(value) => this.setState({"collaborators": value})}
              value = {this.state.collaborators} />
          </View>

          <Divider style={styles.dividerStyle}/>

        </View>
      </ScrollView>
    );
  }
}

export default EditScreen;
