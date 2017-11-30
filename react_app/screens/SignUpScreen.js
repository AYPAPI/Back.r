import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';

//Import function for signing in.
import { onSignIn } from '../auth.js';
var firebase = require('firebase')

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
      user: "",
      email: "",
      password: "password"
    };

    this.signUp = this.signUp.bind(this)
  }

  signUp(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(user){
      console.log('successfully created account')
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
			if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
    	} else {
        alert(errorMessage);         
    	}
    	console.log(error);
    });
  };

  render() {

    const { navigate } = this.props.navigation;

    return (

        <Image
            source={background}
            style={styles.imageContainer}>
            <View style={styles.formsContainer}>
                <FormInput containerStyle={styles.formInputContainer}
                    placeholder="Email address"
                    onChangeText={(email) => this.setState({email})}
                />
                <FormInput containerStyle={styles.formInputContainer}
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(password) => this.setState({password})}
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
                textStyle={{fontFamily: 'gotham-rounded', fontSize: 16, marginTop: 3}}
                borderRadius={10}
                backgroundColor='#C753E0'
                title="Create Account!"
                fontFamily='gotham-rounded'
                icon={{name: 'check', type: 'material-community'}}
                //onPress={() => {
                //onSignIn().then(() => navigate("SignedIn", {user: this.state.user}));}}
                onPress={this.signUp}
              />
            </View>
	    </Image>
    );
  }
}

export default SignUpScreen;
