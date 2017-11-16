import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';

class ThreadScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Convo with ${navigation.state.params.receiver}`
  });

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View>
      <Button
          onPress={() => navigate("Matches")}
          title="Matches"
          buttonStyle={{ marginTop: 20 }}
      />
      </View>
    );
  }
}

export default ThreadScreen;
