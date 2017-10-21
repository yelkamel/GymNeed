import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  } from 'react-native';
import { Metrics, Colors, Fonts } from 'Themes';

import store from 'react-native-simple-store';
import ImageManager from './ImageManager';

export default class FbProfil extends Component
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
        userProfil: null,
    };
  }

 componentWillMount()
 {
    store.get('userProfil').then(userProfil =>
    {
        this.setState({
            userProfil,
        });
    });
 }

  render()
  {
    if (this.state.userProfil === null)
        { return (<View />); }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <ImageManager initHeight={80} initWidth={80} sourceUri={this.state.userProfil.picture.data.url} />
        <Text style={{ margin: 10, fontSize: 15, color: 'white', fontFamily: Fonts.type.global }}>
          {this.state.userProfil.first_name} {this.state.userProfil.last_name}
        </Text>
      </View>
        );
  }
}
