import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  } from 'react-native';
import { Colors } from 'Themes';
import FbLogin from 'Components/FbLogin';
import  FBSDK from 'react-native-fbsdk';

const {
  AccessToken,
} = FBSDK;


export default class Login extends Component
{
  static propTypes = {
    setAccessToken: PropTypes.func.isRequired,
  }

  static defaultProps = {
    setAccessToken: () => {},
  }

  constructor(props)
  {
    super(props);
    this.state = {
    };
  }

  componentWillMount()
  {
    AccessToken.getCurrentAccessToken().then((data) =>
    {
      if (data != null && data.accessToken != null)
        { this.props.setAccessToken(data.accessToken); }
   });
  }

  render()
  {
    // AppEventsLogger.logPurchase(15, 'USD', { param: 'value' });
    return (
      <View style={styles.mainContainer}>
        <FbLogin setAccessToken={this.props.setAccessToken} />
      </View>);
  }
}


const styles = StyleSheet.create({
mainContainer: {
  flex           : 1,
  backgroundColor: Colors.headerBackground,
  justifyContent : 'center',
  alignItems     : 'center',
},
});

