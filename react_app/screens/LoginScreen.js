import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, NativeModules } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { createUser, getuser, createSettings } from '../router/api.js';


import { Font } from 'expo';

import { onSignIn } from '../auth.js';

var firebase = require('firebase')

var config = {
  apiKey:'AIzaSyC1gcj_eqTWR0paom50ebVzTL6u_V9jrcI',
  authDomain:'backr-firebase.firebaseapp.com',
  databaseURL:'backr-firebase.firebaseio.com',
  storageBucket:'backr-firebase.appspot.com'
};
var app = firebase.initializeApp(config)

/* Style */
import { lightGrey,
    backerBlue,
    makerPurple,
    checkGreen,
    noRed } from '../assets/styles/colors.js';

var background = require('../assets/images/splash_screen-02.png');

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
    buttonStyle: {
        marginBottom: 20,
    },
    buttonText: {
        fontFamily: 'gotham-rounded',
        fontSize: 16,
        marginTop: 3,
    },
};


class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.load = false
    this.state = {
      user: "test_user",
      fontLaoded: false,
      email:'',
      password:'',
    };
    this.login = this.login.bind(this)
    this.success = this.success.bind(this)
  }

  fbLogIn(navigate) {
    const { type, token } = Expo.Facebook.logInWithReadPermissionsAsync('187665428456187', {
        permissions: ['public_profile', 'email']
      }).then(function(res) {
        console.log(res)
        if (res.type === 'success') {
          // Build Firebase credential with the Facebook access token.
        const credential = firebase.auth.FacebookAuthProvider.credential(res.token);
        console.log(credential)
        // Sign in with credential from the Facebook user.
        firebase.auth().signInWithCredential(credential).then((user) => {
          console.log("User is" + user.displayName)
          user_name = user.displayName;
          user_email= user.email;
          createUser(user_name, user_email);

          //createSettings(user_email);
          navigate("SignedIn", {name: user_name, email: user_email, isMaker: false});
        }).catch((error) => {
          // Handle Errors here.
          console.log(error)
        });

        }
      })

  }



 login(navigate){
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(user) {
      console.log('successfully logged in ' + JSON.stringify(user))
      console.log("User's email = " + user.email)
      navigate("SignedIn", {name: "", email: user.email, isMaker: false});

      this.load = true
      return true
    }).catch(function(error) {
      var errorCode = error.code
      var errorMessage = error.message
			if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
    	} else {
        alert(errorMessage);
    	}
    	console.log(error);
      this.load = false
      return false
    });
	}


  success(navigate){
    //var promise = new Promise(this.login).then(function(value){console.log(value)})
    this.login(navigate)
  }

  fbsuccess(navigate) {
    console.log("nav")
    this.fbLogIn(navigate)
  }

  async componentDidMount() {
      await Font.loadAsync({
        'gotham-rounded': require('../assets/fonts/Gotham-Rounded-Bold.otf'),
      });

      this.setState({ fontLoaded: true });
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
                    onChangeText={(email) => this.setState({email})}
                />

                <FormInput containerStyle={styles.formInputContainer}
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(password) => this.setState({password})}
                />
            </View>

            <View style={styles.optionsContainer}>
                <Button
                    backgroundColor="transparent"
                    color="black"
                    title="Forgot Password?"
                    fontSize={12}
                    activeOpacity={0.5}
                    onPress={() => navigate("ForgotPassword")}
                   />

    	        <Button
                    backgroundColor="transparent"
                    color="black"
                    title="Create Account"
                    fontSize={12}
                    activeOpacity={0.5}
                    onPress={() => navigate("SignUp")}
                    />
            </View>

            <View style={styles.buttonsContainer}>
              <Button style={styles.buttonStyle}
                textStyle={styles.buttonText}
                borderRadius={10}
                backgroundColor={makerPurple}
                title="Sign in with email"
                icon={{name: 'email', type: 'material-community'}}
                //onPress={() => {
                //onSignIn().then(() => navigate("SignedIn", {user: this.state.user}));}}
                onPress={() => this.success(navigate)}
              />

	          <Button style={styles.buttonStyle}
                textStyle={styles.buttonText}
                borderRadius={10}
                backgroundColor={backerBlue}
                title="Sign in with Facebook"
                icon={{name: 'facebook-box', type: 'material-community'}}
                onPress={() => {
                  this.fbsuccess(navigate)
              }}
              />
            </View>
	    </Image>
    );
  }
}

export default LoginScreen;
