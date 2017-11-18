import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';

class UserProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Welcome ${navigation.state.params.user}`
  });

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View>
      <Button
          onPress={() => navigate("Explore", {user: "hiimauser"})}
          title="Explore Page"
          buttonStyle={{ marginTop: 20 }}
      />
      </View>
    );
  }
}

export default UserProfileScreen;
