import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {Avatar,
        Icon,
        Button,
        FormInput
} from 'react-native-elements';


//Method for logging out.
import { onSignOut } from '../auth.js';

import { lightGrey,
    backerBlue,
    makerPurple,
    checkGreen,
    noRed } from '../assets/styles/colors.js';

var background = require('../assets/images/reset_password-02.png');

const styles = {
    imageContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: null,
        height: null,
    },
    formsContainer: {
        marginTop: 75,
        width: 300,
    },
    formInputContainer: {
        marginBottom: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
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

class ForgotPasswordScreen extends Component {

  render() {

    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;

      return (
          <Image
              source={background}
              style={styles.imageContainer}>
              <View style={styles.formsContainer}>
                  <FormInput containerStyle={styles.formInputContainer}
                      placeholder="Email address"
                      onChangeText={(name) => this.setState({name})}
                  />
              </View>

              <View style={styles.optionsContainer}>
                  <Button
                      color="black"
                      title="Back to login >"
                      backgroundColor='transparent'
                      activeOpacity={0.5}
                      fontSize={12}
                      onPress={() => navigate("Login")}
                      />
              </View>

            <View style={styles.buttonContainer}>
                <Button
                  textStyle={styles.buttonText}
                  backgroundColor={makerPurple}
                  borderRadius={10}
                  activeOpacity={0.5}
                  icon={{name: 'lock', type: 'material-community'}}
                  title= 'Recover Account Password'
                  onPress={()=> goBack()}
                />
            </View>
          </Image>
      );
  }
}

export default ForgotPasswordScreen;
