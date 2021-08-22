
import React,{Component} from "react";
import {  Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class Screen extends Component{
    render(){
      return(
  <View style ={
    styles.containers
  }>
    
    
 
  </View>
      );
    }
  }
  const styles = StyleSheet.create({
   
    containers:{
   
flex:1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    },
   
    
  
  });
// import React from 'react'
// import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
// //import { theme } from '../core/theme'

// export default function Background({ children }) {
//   return (
//     // <ImageBackground
//     //   source={require('')}
//     //   resizeMode="repeat"
//     //   style={styles.background}
//     // >
//       <KeyboardAvoidingView style={styles.container} behavior="padding">
//         {children}
//       </KeyboardAvoidingView>
//     // </ImageBackground>
//   )
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     width: '100%',
//    backgroundColor:"gold"
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//     width: '100%',
//     maxWidth: 340,
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

   