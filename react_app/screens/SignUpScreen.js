import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';
import { Card, FormLabel, FormInput } from 'react-native-elements';

//Import function for signing in.
import { onSignIn } from '../auth.js';


class SignUpScreen extends Component {

  render() {

    const { navigate } = this.props.navigation;

    return (

        <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 28 }}>BACKR</Text>
            <Card>
              <FormLabel>Email</FormLabel>
              <FormInput placeholder="Email address..." />
              <FormLabel>Password</FormLabel>
              <FormInput secureTextEntry placeholder="Password..." />
              <FormLabel>Age</FormLabel>
              <FormInput placeholder="Enter Age..." />

              <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#03A9F4"
                title="SIGN UP"
                onPress={() => {
                  onSignIn().then(() => navigate("SignedIn", {user: "gimmeaname"}));
                }}
              />

            </Card>
          </View>

    );
  }
}

export default SignUpScreen;
