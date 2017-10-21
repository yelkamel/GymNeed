<<<<<<< HEAD
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import React from 'react';
=======
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import BCH_HeaderRight from '../Benchr/Header/BCH_HeaderRight'
import BCH_HeaderLeft from '../Benchr/Header/BCH_HeaderLeft'
import BCH_Drawer from '../Benchr/Drawer/BCH_Drawer'

import  MyProfil from '../Benchr/MyProfil/MyProfil'
import MatchOfTheDay from '../Benchr/MatchOfTheDay/MatchOfTheDay'

import { Colors, Metrics } from '../Benchr/Themes/'
>>>>>>> master

import Home from 'Containers/Home';
import About from 'Containers/About';

<<<<<<< HEAD
import Drawer from 'Containers/Drawer';
import Search from 'Containers/Search';
import CorporateProgram from 'Containers/CorporateProgram';
import Help from 'Containers/Help';
import { Metrics } from 'Themes/';


// drawer stack
const DrawerStack = DrawerNavigator({
  Home: {
    screen: Home,
    name  : 'Home',
  },
  CorporateProgram: {
    screen: CorporateProgram,
    name  : 'CorporateProgram',
  },
  Search: {
    screen: Search,
    name  : 'Search',
  },
  Help: {
    screen: Help,
    name  : 'Help',
  },

},
  {
    headerMode      : 'none',
    initialRouteName: 'Home',
    gesturesEnabled : false,
    contentComponent: (props) => <Drawer {... props} />,
  });
/*
const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack },
}, {
  headerMode       : 'float',
  navigationOptions: ({ navigation }) => ({
    headerLeft : <BCH_HeaderLeft navigation={navigation} />,
    headerRight: <BCH_HeaderRight />,
    headerStyle: { backgroundColor: 'transparent', zIndex: -1, height: Metrics.navBarHeight },
  }),
});

// login stack

const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: 'red'},
    title: 'You are not logged in'
  }
=======

// drawer stack
const DrawerStack = DrawerNavigator({
  MatchOfTheDay: { screen: MatchOfTheDay },
  MyProfil: { screen: MyProfil }},
  {
    initialRouteName: 'MatchOfTheDay',    
    gesturesEnabled: false,
    contentComponent: (props) => <BCH_Drawer {... props}/> 
  })

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerLeft: <BCH_HeaderLeft navigation={navigation}/>,
    headerRight: <BCH_HeaderRight/>,
    headerStyle: {backgroundColor: Colors.headerColor, height:  Metrics.navBarHeight}
  })
})

// login stack
/*
const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: 'red'},
    title: 'You are not logged in'
  }
})
*/
// Manifest of possible screens
const PrimaryNav = StackNavigator({
  DrawerNavigation: { screen: DrawerNavigation },
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'DrawerNavigation'
>>>>>>> master
})
*/


<<<<<<< HEAD
export default DrawerStack;
=======
export default DrawerNavigation
>>>>>>> master
