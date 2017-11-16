import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user} Settings`
  });

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View>
      <Button
          onPress={() => navigate("Explore", {user: "name"})}
          title="Explore Page"
          buttonStyle={{ marginTop: 20 }}
      />
      </View>
    );
  }
}

export default SettingsScreen;
