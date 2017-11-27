import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';

//Method for logging out.
import { onSignOut } from '../auth.js'
import {Avatar} from 'react-native-elements'
import {Icon} from 'react-native-elements'
import {Button} from 'react-native-elements'
import {Header} from 'react-native-elements'

var profilePhoto = require('../images/bread.jpg');

const styles = {
  headerIcon: {
    margin: 15,
    fontSize: 30
  },
  titleMaker: {
    color: '#75C9F9',
    margin: 15,
    fontSize: 40
  },
  titleBacker: {
    color: '#C753E0',
    margin: 15,
    fontSize: 40
  }
};


class MyProfileScreen extends Component {

  static navigationOptions = ({ navigation }) => {
  const { user } = navigation.state.params;

  return {
    headerTitle: (
      <Icon
        name='lightbulb'
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
        color='#999999'
        onPress={ () => navigation.navigate("Matches", {user: user}) }
      />
    ),
    headerLeft: (
        <Icon
          name='user-o'
          type='font-awesome'
          color='#75C9F9'
          iconStyle={styles.headerIcon}
        />
    ),
  };
};

  render() {


    const { navigate } = this.props.navigation;

      return (

       <View
          style={{flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'}}
        >

        <Avatar
        padding={10}
        width={225}
        height={225}
        rounded
        source={profilePhoto}
        onPress={()=>navigate('UserProfile', {user:'yourOwnProfile'})}
        activeOpacity={0.7}
        />
         <View
          style={{flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'}}
        >
        <Icon name='attach-money'/>
        <Icon name='group'/>
        <Icon name='build'/>
        <Icon/>
        <Icon/>

        </View>
        <Text>
        IDEA/TITLE
        </Text>

        <Text>
        NAME
        </Text>

        <Text>
        Location
        </Text>

        <Button
          rasied='true'
          backgroundColor='#57C4DD'
          icon={{name: 'settings'}}
          title="Edit Account Settings"
          onPress={() => navigate("Settings")}
        />
        <Button
          backgroundColor='#57C4DD'
          icon={{name: 'mode-edit'}}
          title="Edit Profile"
          onPress={() => navigate("Edit")}
        />
        <Button
          title="Switch Profile"
          backgroundColor='#57C4DD'
          icon={{name: 'autorenew'}}
          onPress={() => navigate("MyProfile")}
        />
        <Button
            onPress={() => navigate("Explore", {user: "insertuserhere"})}
            title="Explore Page"
            buttonStyle={{ marginTop: 20 }}
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="#03A9F4"
          title="Log Out"
          onPress={() => {
            onSignOut().then(() => navigate("SignedOut"));
          }}
        />
        </View>

      );
  }
}

export default MyProfileScreen;
