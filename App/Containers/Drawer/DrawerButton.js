import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    View,
  } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { Colors, Metrics, Fonts } from 'Themes';
import { display, log } from 'Components/Debug';

export default class ButtonDrawer extends Component
{
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  static defaultProps = {
    navigation: () => {},
  }

  constructor(props)
  {
    super(props);
    this.state = {
    };
  }

  drawerButton = (navigation) =>
  {
    log('DrawerButton', 'OPEN');
    navigation.navigate('DrawerOpen');
  }


  render()
  {
    return (
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        offsetX={Metrics.screenWidth - 15}
        offsetY={30}
        icon={<Icon name="ios-menu" style={styles.icon} />}
        size={Metrics.drawerButtonSize}
        onPress={() => this.drawerButton(this.props.navigation)}
      />);
  }
}

const styles = StyleSheet.create({
    icon: {
      color   : 'white',
      fontSize: 20,
    },
    button: {
        position       : 'absolute',
        top            : 0,
        left           : 0,
        height         : 40,
        width          : 40,
        backgroundColor: Colors.drawerButton,
    },
    overlay: {
      position       : 'absolute',
      bottom         : 0,
      left           : 0,
      right          : 0,
      top            : 0,
      backgroundColor: 'transparent',
      elevation      : 999,
      zIndex         : 99,
    },
});

