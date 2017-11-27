import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';

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

class UserProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
  const { user, mainUser } = navigation.state.params;

  return {
    headerTitle: (
      <Icon
        name='lightbulb'
        type='material-community'
        iconStyle={styles.titleMaker}
        onPress={ () => navigation.navigate("Explore", {user: mainUser}) }
      />
    ),
    headerRight: (
      <Icon
        name='message-text-outline'
        type='material-community'
        iconStyle={styles.headerIcon}
        color='#999999'
        onPress={ () => navigation.navigate("Matches", {user: mainUser}) }
      />
    ),
    headerLeft: (
        <Icon
          name='user-o'
          type='font-awesome'
          color='#999999'
          iconStyle={styles.headerIcon}
          onPress={ () => navigation.navigate("MyProfile", {user: mainUser}) }
        />
    ),
  };
};

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
