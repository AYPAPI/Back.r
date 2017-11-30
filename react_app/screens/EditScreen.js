import React, { Component } from 'react';
import { Text, TextInput, Button, Switch, View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Divider, Icon } from 'react-native-elements';

var profilePhoto = require('../img/cannon_beach-01.jpg');
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
    backgroundColor: 'white',
  },
  editPhotosContainer: {
      flexDirection: 'column',
  },
  photosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 35,
    marginLeft: 10,
  },
  subPhotosContainer: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
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
  avatarOverlay: {
      height: 175,
      width: 175,
    borderRadius: 175/2,
    borderWidth: 3,
    borderColor: lightGrey
  },
  labelAndIcon: {
      flexDirection: 'row',
      alignItems: 'flex-start',
  },
  iconStyle: {
      marginTop: 8,
      marginLeft: 5,
  },
  dividerStyle: {
      backgroundColor: lightGrey,
      marginTop: 10,
      marginBottom: 10,
  },
  subAvatarOverlay: {
      height: 85,
      width: 85,
    borderRadius: 85/2,
    borderWidth: 3,
    borderColor: lightGrey
  },
  buttonStyle: {
      width: 250,
  },
  buttonText: {
      fontFamily: 'gotham-rounded',
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
});

class EditScreen extends Component {
  static navigationOptions = {
    title: "Edit Settings or Profile"
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
                  width={170}
                  height={170}
                  activeOpacity={0.7}
                  source={profilePhoto}
                  onPress={()=>navigate()}
                  overlayContainerStyle={styles.avatarOverlay}
                  />
                <View style={styles.subPhotosContainer}>
              <Avatar
                  rounded
                  width={80}
                  height={80}
                  activeOpacity={0.7}
                  source={require('../img/shuttle-01.jpg')}
                  onPress={()=>navigate()}
                  overlayContainerStyle={styles.subAvatarOverlay}
                  />
              <Avatar
                  rounded
                  width={80}
                  height={80}
                  activeOpacity={0.7}
                  icon={{name:'camera', type:'material-community', size: 30}}
                  onPress={()=>navigate()}
                  overlayContainerStyle={styles.subAvatarOverlay}
                  />
                  </View>
          </View>

          <Text style={styles.headerText}>
              Tell us about yourself
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 14, fontStyle: 'italic'}}>
              Your title...
          </Text>
          <TextInput
            style={{borderRadius: 10, marginRight: 10, marginLeft: 10, height: 40, borderColor: lightGrey, borderWidth: 1}}
          />
          <Text style={{ marginLeft: 10, fontSize: 14, fontStyle: 'italic'}}>
              Your name...
          </Text>
          <TextInput
            style={{borderRadius: 10, marginRight: 10, marginLeft: 10, height: 40, borderColor: lightGrey, borderWidth: 1}}
          />
          <Text style={{ marginLeft: 10, fontSize: 14, fontStyle: 'italic'}}>
              Your experience...
          </Text>
          <TextInput
            style={{borderRadius: 10, marginRight: 10, marginLeft: 10, height: 40, borderColor: lightGrey, borderWidth: 1}}
            multiline={true}
          />

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
                color='#59C129'
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
                color='#FC8A2D'
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
                color='#bb24f2'
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
                color='#EF2074'
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
                color='#57C4DD'
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
