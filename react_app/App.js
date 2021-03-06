import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

//Import router containing all screens for navigation.
import { createRootNav } from './router/router.js';

//Import authentication functions for user Login.
import { isSignedIn } from "./auth.js";

//Main React-Native App class. Returns reference to main Login Stack Navigator
export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedState: false,
      fontLoaded: false,
    };
  }

  async componentDidMount() {
      await Font.loadAsync({
        'gotham-rounded': require('./assets/fonts/Gotham-Rounded-Bold.otf'),
      });

      this.setState({ fontLoaded: true });
  }

  componentWillMount() {
    console.log(this.state);

    //Uncomment once we have authentication all set up.
  /*  isSignedIn()
    .then(res => this.setState({ signedIn: res, checkedState: true}))
    .catch(err => alert("ERROR with checking signed in or not."));*/
  }

  render() {

    const { signedIn, checkedState} = this.state;

    //TODO find a loading thing in react native.
    /*
    if(!checkedState) {
      console.log(this.state);
      return null;
    }*/

    if (!this.state.fontLoaded) {
      return <Expo.AppLoading />;
    }
    const InitView = createRootNav(signedIn);
    return <InitView />;

  }
}
