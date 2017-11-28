import React, { Component } from 'react';
import { Slider } from 'react-native-elements'
import {
  Text,
  Button,
  View,
  StyleSheet,
  Switch,
  TouchableHighlight,
  Image,
} from 'react-native';

//Method for logging out.
import { onSignOut } from '../auth.js';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {distance: 10, trueSwitchIsOn: true}
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
        step={10}
        minimumValue={10}
        maximumValue={100}
        value={this.state.distance}
        onValueChange={(value) => this.setState({distance:value})} />
        <Text>Value: {this.state.distance}</Text>
      <Text>Value: {"What are you looking for?"}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', borderTopWidth: 10, borderColor:'white'}}>
        <View style={{borderRadius: 20 , borderWidth: 5}}>
        <TouchableHighlight
          underlayColor={"#00ffff"}>
          <Text>test</Text>
        </TouchableHighlight>
        </View>
        <TouchableHighlight
          underlayColor={"#00ffff"}>
          <Text>test2</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"#03A9F4"}>
          <Text>test3</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"#03A9F4"}>
          <Text>test4</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"#03A9F4"}>
          <Text>test5</Text>
        </TouchableHighlight>
      </View>
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
