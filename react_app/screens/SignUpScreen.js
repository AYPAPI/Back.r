import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';

//Import function for signing in.
import { onSignIn } from '../auth.js';

var background = require('../img/create_account_screen-01.png');

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: null,
        height: null,
    },
    formsContainer: {
        marginTop: 40,
        width: 300,
    },
    formInputContainer: {
        marginBottom: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonStyle: {
        width: 250,
        marginBottom: 20,
    },
});

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

        <Image
            source={background}
            style={styles.imageContainer}>
            <View style={styles.formsContainer}>
                <FormInput containerStyle={styles.formInputContainer}
                    placeholder="Email address"
                />
                <FormInput containerStyle={styles.formInputContainer}
                    secureTextEntry
                    placeholder="Password"
                />
                <FormInput containerStyle={styles.formInputContainer}
                    secureTextEntry
                    placeholder="Confirm Password"
                />
            </View>

            <View style={styles.optionsContainer}>
    	        <Button
                    color="black"
                    title="< Back to login"
                    backgroundColor='transparent'
                    fontSize={12}
                    onPress={() => navigate("Login")}
                    />
            </View>

            <View style={styles.buttonsContainer}>
              <Button style={styles.buttonStyle}
                borderRadius={10}
                backgroundColor='#C753E0'
                title="Create Account!"
                icon={{name: 'check', type: 'material-community'}}
                onPress={() => {
                onSignIn().then(() => navigate("SignedIn", {user: this.state.user}));}}
              />
            </View>
	    </Image>
    );
  }
}

export default SignUpScreen;
