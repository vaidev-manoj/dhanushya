
import React, {Component}from "react";
import {  Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Constants from 'expo-constants';
import AppButton from "../app/component/AppButton";
import ApptextInput from "../app/component/ApptextInput";
//import Icon from "../app/component/Icon";

import colors from "../app/component/config/colors";

import AppPassword from "../app/component/AppPassword";
const initialState = {
    username: '',
    email:'',
    password: '',
   
   
  };
export default class RegisterScreen extends Component{
    state = initialState;
    onUsernameChange = username => {
        this.setState({username});
      };
    render(){
      return(

        <View style={styles.containers}> 
           
          <ApptextInput   title="account" label="USER NAME" ></ApptextInput>
          <ApptextInput   title="email" label="EMAIL" ></ApptextInput>
      <AppPassword label="PASSWORD"  title="lock" >         </AppPassword>
         <AppButton title="register " color= "primary" mypress= {()=>{console.log('on register')}}  ></AppButton> 
   
             </View>

      
 
  
 
      );
    }
  }
  const styles = StyleSheet.create({
   
    containers:{
   
  top:80,

    width: '100%',
    marginTop: Constants.statusBarHeight,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white",
   padding:20,
   paddingEnd:10,
   paddingBottom:10
    }, 
    
  
  });

