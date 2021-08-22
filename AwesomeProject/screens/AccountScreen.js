import React from 'react';
import {View,StyleSheet ,FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import colors from '../app/component/config/colors';
import ListingItems from '../app/component/ListingItem';
import Icon from '../app/component/Icons';
// import Listingitems from '../components/ListingItems';
const AccountScreen = () => {
   
    const menus =[
        {
           title:'My Listings',
           icon:{
               name:'format-list-bulleted',
               backgroundColor:colors.primary,
               
           }
        },
        {
            title:'My Messages',
            icon:{
                name:'email',
                backgroundColor:colors.secondary,
               
            }
         },
    ]
    
    return (
        <View  style={styles.container}>
 <View style={styles.container1}>
<ListingItems title='vaidev manoj' subtitle='vaidevmanoj34@gmail.com' image={require('../assets/p1.jpg')} />
 </View>
 <View style={styles.container2}>
<FlatList data={menus} keyExtractor={(menu)=>menu.title }
    
     renderItem={({item})=>(<ListingItems title={item.title} 
        IconComponent={<Icon name={item.icon.name}   size={30} backgroundColor={item.icon.backgroundColor} color={item.icon.iconcolor} />}
    />)}>

</FlatList>
 </View>
 <View style={styles.container3}>
     <ListingItems    title='Logout' IconComponent={<Icon name='logout' color='white' size={30} backgroundColor='orange'  />} />
 </View>
 </View>

    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f8f4f4',
        width:'100%',
        height:'100%', 
 
    },
    
    container1: {
       
        backgroundColor:'white',
        width:'100%',
        height:'15%', 
        marginTop:'10%',
   
    
        
    },
    
    container2:{
      width:'100%',
      height:'34%',
      marginTop:'10%'  
    },
    
    container3:{
        width:'100%',
        height:'90%',
        marginTop:'10%'  
      },
      
      
    
})
