import React, { Component } from 'react';
import {
View,
Text,
} from 'react-native';

import styles from './style';

export default class About extends Component
{
  static navigationOptions = {
    title           : 'Home',
    headerTitleStyle: { color: 'white' },
  };

  constructor(props)
  {
    super(props);
    this.state = {

    };
  }

  componentWillMount()
  {

  }

  render()
  {
    return (
      <View style={styles.mainContainer}>
        <Text> About </Text>
      </View>);
  }
}