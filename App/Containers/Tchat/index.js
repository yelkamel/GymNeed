import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
  } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { Colors, Metrics } from 'Themes';
import { log } from 'Components/Debug';
import TchatBox from './TchatBox';

export default class Tchat extends Component
{
  static propTypes = {
    navigation: PropTypes.object,
    children  : PropTypes.node.isRequired,
  }

  static defaultProps = {
    navigation: () => {},
  }

  constructor(props)
  {
    super(props);
    this.state = {
        isModalOpen: false,
    };
  }


  openTchatBox = () =>
  {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
  }
  closeTchatBox = () =>
  {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
  }

  drawerButton = (navigation) =>
  {
    log('DrawerButton', 'OPEN');
    navigation.navigate('DrawerOpen');
  }


  render()
  {
    return (
      <View style={{ flex: 1 }}>
        {this.props.children}
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          icon={<Icon name="ios-chatboxes" style={styles.icon} />}
          size={Metrics.tchatButtonSize}
          onPress={this.openTchatBox}
        />
        <Modal
          animationType="slide"
          transparent
          visible={this.state.isModalOpen}
          onRequestClose={() => {}}
        >
          <TchatBox closeTchatBox={this.closeTchatBox} />
        </Modal>
      </View>
      );
  }
}

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        top     : 0,
        left    : 0,
        right   : 0,
        bottom  : 0,
    },
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

