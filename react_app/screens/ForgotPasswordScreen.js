import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,

} from 'react-native';
import {Avatar,
        Icon,
        Button,
        FormInput
} from 'react-native-elements';


//Method for logging out.
import { onSignOut } from '../auth.js';

var backerBlue = '#57C4DD';
var darkBlue = '#58A6DB';
var makerPurple = '#C753E0';
var lightGrey = '#BFBFBF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  avatarContainer: {
    flex: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  formContainer: {
      marginTop: 40,
      width: 300,
  },
  iconContainer: {
    flex: 1,
    color: backerBlue,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 75,
    fontSize: 150,
    backgroundColor: 'white',
  },
  textContainer:{
      flexDirection: 'column',
      alignItems: 'center',
  },
  nameContainer: {
    fontSize: 18,
    marginTop: 10,
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 15,
  },
  buttonContainerStyle: {
      height: 45,
      backgroundColor: darkBlue,
  },
  buttonStyle: {
      width: 250,
  },
});

class ForgotPasswordScreen extends Component {

  render() {

    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;

      return (
          <View style={styles.container}>
              <View style={styles.avatarContainer}>
              <Icon
                name='lightbulb'
                type='material-community'
                iconStyle={styles.iconContainer}
              />
              </View>

            <View style={styles.textContainer}>
              <Text style={styles.nameContainer}>
                Forgot Password?
              </Text>
            </View>

            <FormInput containerStyle={styles.formContainer}
                placeholder="Email address..."
            />

            <View style={styles.buttonContainer}>
                <Button
                  style={styles.buttonStyle}
                  borderRadius={10}
                  backgroundColor={backerBlue}
                  title= 'Recover Account Password'
                  onPress={()=> goBack()}
                  containerViewStyle={styles.buttonContainerStyle}
                />

            </View>
          </View>

      );
  }
}

export default ForgotPasswordScreen;
