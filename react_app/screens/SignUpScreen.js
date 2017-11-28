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

  constructor(props) {
    super(props);

    this.state = {
      user: "test_user"
    };
  }

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

              <FormLabel>Confirm Password</FormLabel>
              <FormInput placeholder="Password..." />

              <Button
                buttonStyle={{ marginTop: 20 }}
                backgroundColor="#03A9F4"
                title="Create Account"
                onPress={() => {
                  onSignIn().then(() => navigate("SignedIn", {user: this.state.user}));
                }}
              />

            </Card>

	    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
	    	<Text h1>Already have an account?</Text>

		<Button
			buttonStyle={{ marginTop: 20 }}
	      		backgroundColor="#03A9F4"
			title="Sign In"
			onPress={() => {
				onSignOut().then(() => navigate("SignedOut"));
			}}
		/>
	    </View>
          </View>

    );
  }
}

export default SignUpScreen;
