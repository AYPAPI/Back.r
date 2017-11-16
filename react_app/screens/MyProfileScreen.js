import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';

//Method for logging out.
import { onSignOut } from '../auth.js';

class MyProfileScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.type} Profile`
  });

  render() {

    const { navigate } = this.props.navigation;

      return (
        <View>
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
