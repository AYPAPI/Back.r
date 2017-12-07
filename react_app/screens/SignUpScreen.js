import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { createUser } from '../router/api.js'

//Import function for signing in.
import { onSignIn } from '../auth.js';
var firebase = require('firebase')

import { lightGrey,
    backerBlue,
    makerPurple,
    checkGreen,
    noRed } from '../assets/styles/colors.js';

var background = require('../assets/images/create_account_screen-01.png');
var user_name = "";
var user_email = "";

const styles = {
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
    buttonText: {
        fontFamily: 'gotham-rounded',
        fontSize: 16,
        marginTop: 3,
    },
};

class SignUpScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: "",
      name: "",
      email: "",
      name:"",
      password: "password"
    };

    this.signUp = this.signUp.bind(this)
  }
  signUp(navigate) {

    //Probably will be different function, pass in name as well. then call navigate and
    //create user within firebase callback.
    user_name = this.state.name;
    user_email = this.state.email;

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function(user){
        console.log('successfully created account');
        createUser(user_name, user_email);
        createSettings(user_email);

        navigate("SignedIn", {name: user_name, email: user.email, isMaker: false})
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
			if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
    	} else {
        alert(errorMessage);
    	}
    	console.log(error);
      return;
    });
    console.log("Successfully created account in our database ")
  };

  render() {

    const { navigate } = this.props.navigation;

    return (

        <Image
            source={background}
            style={styles.imageContainer}>
            <View style={styles.formsContainer}>
                <FormInput containerStyle={styles.formInputContainer}
                    placeholder="Name"
                    onChangeText={(name) => this.setState({name: name})}
                />
                <FormInput containerStyle={styles.formInputContainer}
                    placeholder="Email address"
                    onChangeText={(email) => this.setState({email: email})}
                />
                <FormInput containerStyle={styles.formInputContainer}
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(password) => this.setState({password: password})}
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
                    onPress={() => this.props.navigation.goBack()}
                    />
            </View>

            <View style={styles.buttonsContainer}>
              <Button style={styles.buttonStyle}
                textStyle={styles.buttonText}
                borderRadius={10}
                activeOpacity={0.5}
                backgroundColor={makerPurple}
                title="Create Account!"
                icon={{name: 'check', type: 'material-community'}}
                //onPress={() => {
                //onSignIn().then(() => navigate("SignedIn", {user: this.state.user}));}}
                onPress={() => this.signUp(navigate)}
              />
            </View>
	    </Image>
    );
  }
}

export default SignUpScreen;
