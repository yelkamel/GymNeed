import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  AsyncStorage,
  Image,
  } from 'react-native';
import { Metrics, Colors } from 'Themes';
import store from 'react-native-simple-store';

const FBSDK = require('react-native-fbsdk');

const {
  LoginButton,
  AppEventsLogger,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

export default class FbLogin extends Component
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

  getFbInfo = (token) =>
  {
    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken: token,
        parameters : {
          fields: {
            string: 'email,name,first_name,middle_name,last_name,picture',
          },
        },
      },
      this.storeResponseFacebookData,
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  storeResponseFacebookData = (error: ?Object, result: ?Object) =>
  {
    if (error)
    {
      console.log(`Error fetching data: ${error.toString()}`);
    }
    else
    {
      console.log(`PROFIL${JSON.stringify(result)}`);
      store.save('userProfil', result);
    }
  }


  render()
  {
    // AppEventsLogger.logPurchase(15, 'USD', { param: 'value' });
    AppEventsLogger.logEvent('Premiere Connexion');
    return (
      <LoginButton
        publishPermissions={['publish_actions']}
        onLoginFinished={
                  (error, result) =>
                  {
                    if (error)
                    {
                      AppEventsLogger.logEvent('error lors de la connexion Fb');
                    }
                  else if (result.isCancelled)
                    {
                      AppEventsLogger.logEvent('annulation de la connexion Fb');
                    }
                    else
                    {
                      AccessToken.getCurrentAccessToken().then(
                        (data) =>
                      {
                        this.getFbInfo(data.accessToken);
                        this.props.setAccessToken(data.accessToken);
                      });
                    }
                  }
                }
        onLogoutFinished={() => AppEventsLogger.logEvent('Déconnexion Fb')}
      />);
  }
}
