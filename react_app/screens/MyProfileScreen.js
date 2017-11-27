import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';

//Method for logging out.
import { onSignOut } from '../auth.js';

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
