import { StackNavigator, DrawerNavigator } from 'react-navigation';
import React from 'react';

import Home from 'Containers/Home';
import About from 'Containers/About';

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
})
*/


export default DrawerStack;
