import React, { Component } from 'react';

import {
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';

class EditScreen extends Component {
  static navigationOptions = {
    title: "Edit Settings or Profile"
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View>
      <Button onPress={() => navigate("MyProfile", {user: "insertuserhere", type: "Edit Backer"})} title="Edit Backer" buttonStyle={{ marginTop: 20 }}
      />
      <Button onPress={() => navigate("MyProfile", {user: "Insertuserhere", type: "Edit Maker"})} title="Edit Maker" buttonStyle={{ marginTop: 20 }}
      />
      <Button onPress={() => navigate("Settings", {user: "imauser"})}
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
      />
      </View>
    );
  }
}

export default EditScreen;
