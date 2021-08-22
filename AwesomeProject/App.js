import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,Platform} from 'react-native';
import AppButton from './app/component/AppButton';


import ViewImagescreen from './screens/ViewImagescreen';
import WelcomeScreen from './screens/WelcomeScreen';
import Card from './app/component/card';
import Cardlist from './screens/cardlist';
import Carddetails from './screens/carddetails';
import Profilelister from './app/component/profilelister';

import MyAccountScreen from './screens/MyAccount';
import Email from './app/component/Email';
import MainScreen from './screens/MainScreen';
import ProfileMessage from './app/component/ProfileMessage';
import AccountScreen from './screens/AccountScreen';
import LoginScreen from './screens/Loginscreen';
import RegisterScreen from './screens/Register';



export default function App() {
  return (
<RegisterScreen></RegisterScreen>
  );
}

const styles = StyleSheet.create({
  container: {
   
    padding:Platform.OS==='android'? StatusBar.currentHeight:50,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center'
  }
});
