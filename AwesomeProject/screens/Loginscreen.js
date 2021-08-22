
import React, {Component,useState}from "react";
import {  Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
//import Logo from "../";
//import { Colors } from "react-native/Libraries/NewAppScreen";
import AppButton from "../app/component/AppButton";
import ApptextInput from "../app/component/ApptextInput";
//import Icon from "../app/component/Icon";
import Screen from "../app/component/Screen";
import colors from "../app/component/config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppPassword from "../app/component/AppPassword";
 
export default class LoginScreen extends Component{
 
  state = {
   email: '',
   password:''
      };
    
    onPress = () => {
    this.setState({
      email: '',
      password:'',
      login:email,password
    });
      };
    
  
    render(){
      return(

        <View style={styles.containers}> 
          <Image style={styles.lom} source={require("../assets/download.jpg")}></Image>
         
          <ApptextInput   title="email" label="EMAIL" mypress={ email => this.setState({ email})} ></ApptextInput>
        
      <AppPassword label="PASSWORD"  title="lock" mypress={password=> this.setState({ password})} >         </AppPassword>
         <AppButton title="LOGIN " color= "login" mypress= {()=>{console.log(this.onPress)}}  ></AppButton> 
   
             </View>

      
 
  
 
      );
    }
  }
  const styles = StyleSheet.create({
   
    containers:{
   
      flex: 1,

    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white",
    marginBottom:-20
    }, lom:{
  
      width:60,
      height:60,
     alignItems:'center',
     justifyContent:'center',
top:-90

    },text:{
      color:'black',
      fontSize:18,
      
      fontWeight:'bold',
      backgroundColor:colors.textinput,
      height:40,
                width:"100%",
                borderRadius:35,
      flexDirection:"row",
      padding:10,
      marginBottom:30},
      icons:{
       justifyContent:"flex-start",
     alignItems:"flex-start",
      flexDirection:"row",
      padding:10,
      marginBottom:30
      }
   
    
  
  });


