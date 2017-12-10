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
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen.js";


export const LoginStack = StackNavigator({
  Login: { screen: LoginScreen },
  SignUp: { screen: SignUpScreen },
  ForgotPassword: { screen: ForgotPasswordScreen }
}, {
  headerMode: 'none',
  mode: 'modal'
});

export const EditProfileStack = StackNavigator({
  MyProfile: { screen: MyProfileScreen },
  Edit: { screen: EditScreen },
}, {
  headerMode: 'none',
  mode: 'modal'
});

export const MainStack = StackNavigator({
  Explore: { screen: ExploreScreen },
  MyProfile: { screen: EditProfileStack },
  UserProfile: { screen: UserProfileScreen },
  Matches: { screen: MatchesScreen },
  Thread: { screen: ThreadScreen },
});

export const SettingsStack = StackNavigator({
  Settings: { screen: SettingsScreen }
}, {
  header: "none",
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
        },
        Settings: {
          screen: SettingsStack
        }
      },
      {
        headerMode: "none",
        mode: "modal",
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    );
};
