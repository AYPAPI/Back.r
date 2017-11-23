import React, { Component } from 'react';
import { Slider } from 'react-native-elements'
import {
  Text,
  Button,
  View,
  StyleSheet,
  Switch
} from 'react-native';

//Method for logging out.
import { onSignOut } from '../auth.js';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0.2, trueSwitchIsOn: true}
  }
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user} Settings`
  });

  render() {

    const { navigate } = this.props.navigation;
    return (
    <View style={{flex: 1}}>
      <Button
          onPress={() => navigate("Explore", {user: "name"})}
          title="Explore Page"
          buttonStyle={{ marginTop: 20 }}
      />
      <Text h3>Discovery Settings</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
        <Text h4>Location</Text>
        <Text h4>My Location</Text>
      </View>
      <Text h4>Maximum Distance</Text>
      <Slider
        value={this.state.value}
        onValueChange={(value) => this.setState({value})} />
        <Text>Value: {this.state.value}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
        <Text h4>Messages</Text>
        <Switch
          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
          value={this.state.trueSwitchIsOn} />
      </View>
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

export default SettingsScreen;
