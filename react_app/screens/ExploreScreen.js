import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';

class ExploreScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}  Explore`
  });

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View>
      <Button
          onPress={() => navigate("UserProfile", {user: "Im a user"})}
          title="User Profile"
          buttonStyle={{ marginTop: 20 }}
      />
      <Button
          onPress={() => navigate("MyProfile", {user: "fillinuserrrr", type: ""})}
          title="My Profile"
          buttonStyle={{ marginTop: 20 }}
      />
      <Button
          onPress={() => navigate("Edit")}
          title="Edit"
          buttonStyle={{ marginTop: 20 }}
      />
      <Button
          onPress={() => navigate("Matches")}
          title="Matches"
          buttonStyle={{ marginTop: 20 }}
      />
      </View>
    );
  }
}

export default ExploreScreen;
