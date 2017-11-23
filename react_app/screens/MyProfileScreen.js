import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet
} from 'react-native';

//Method for logging out.
import { onSignOut } from '../auth.js'
import {Avatar} from 'react-native-elements'
import {Icon} from 'react-native-elements'
import {Button} from 'react-native-elements'
import {Header} from 'react-native-elements'

var profilePhoto = require('../images/bread.jpg');

class MyProfileScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.type} Profile`
  });

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
        </View>

      );
  }
}

export default MyProfileScreen;
