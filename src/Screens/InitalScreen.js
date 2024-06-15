import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home/Home';
import Map from './Map/Map';
import Saved from './Saved/Saved';
import Settings from './Settings/Settings';


// Images  
const homeIcon_active = require('../assets/Icon/home-active.png')
const homeIcon = require('../assets/Icon/home.png')
const compass_active = require('../assets/Icon/compass-active.png')
const compass = require('../assets/Icon/compass.png')
const saved_active = require('../assets/Icon/saved-active.png')
const saved = require('../assets/Icon/saved-active.png')
const settings_active = require('../assets/Icon/settings-active.png')
const settings = require('../assets/Icon/settings.png')


const Tab = createBottomTabNavigator();

const InitalScreen = () => {
  return (
    
    <Tab.Navigator 
      screenOptions={({route})=>({
        headerShown:false,
        tabBarIcon:({focused})=>{
          let iconName;
          if(route.name === 'Home'){
            iconName=focused ? homeIcon_active : homeIcon;
          }else if(route.name === 'Map'){
            iconName=focused ? compass_active :compass
          }else if(route.name === 'Saved'){
            iconName=focused ? saved_active :saved
          }else if(route.name === 'Settings'){
            iconName=focused ? settings_active :settings
          }
          return(
            <Image source={iconName} resizeMode="contain" style={styles.footerIcon } />
          )
        },
        tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor:'#000',
          borderRadius:50,
          // marginHorizontal:20,
        //  bottom:10,
         height:60
        }
      })}
    >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Map" component={Map} />
    <Tab.Screen name="Saved" component={Saved} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
  )
}

export default InitalScreen

const styles = StyleSheet.create({
  footerIcon:{
    width:25,
  }
})