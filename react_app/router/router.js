import React from 'react';
import { StackNavigator } from 'react-navigation';

import EditScreen from '../screens/EditScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';
import ExploreScreen from '../screens/ExploreScreen.js';
import MyProfileScreen from "../screens/MyProfileScreen.js";
import SignUpScreen from "../screens/SignUpScreen.js";
import ThreadScreen from "../screens/ThreadScreen.js";
import UserProfileScreen from "../screens/UserProfileScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import MatchesScreen from "../screens/MatchesScreen.js";

export const MainStack = StackNavigator({
  Explore: { screen: ExploreScreen },
  MyProfile: { screen: MyProfileScreen },
  UserProfile: { screen: UserProfileScreen },
  Matches: { screen: MatchesScreen },
  Thread: { screen: ThreadScreen },
  Edit: { screen: EditScreen },
  Settings: { screen: SettingsScreen }
});

export const LoginStack = StackNavigator({
  Login: { screen: LoginScreen },
  SignUp: { screen: SignUpScreen },
}, {
  headerMode: 'none',
  mode: 'modal'
});

export const createRootNav = (signedIn = false) => {
  return StackNavigator(
      {
        SignedIn: {
          screen: MainStack,
        },
        SignedOut: {
          screen: LoginStack,
        }
      },
      {
        headerMode: "none",
        mode: "modal",
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    );
};
