import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Animated,
    View,
  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { Colors, Metrics, Fonts } from 'Themes';
import { log } from 'Components/Debug';

const STATUS_BAR_HEIGHT = Metrics.statusBarHeight;
const NAVBAR_HEIGHT = Metrics.headerHeight;

export default class ButtonDrawer extends Component
{
  static propTypes = {
    scrollAnim: PropTypes.any,
    navigation: PropTypes.any,
    title     : PropTypes.string,
  }

  static defaultProps = {
    scrollAnim: new Animated.Value(0),
    navigation: null,
    title     : 'GymNeed',
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
    const navbarOpacity = this.props.scrollAnim.interpolate({
        inputRange : [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      });

      const headerHeight = this.props.scrollAnim.interpolate({
        inputRange : [0, NAVBAR_HEIGHT],
        outputRange: [NAVBAR_HEIGHT / 2, STATUS_BAR_HEIGHT],
        extrapolate: 'clamp',
      });
    return (
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <View style={styles.bar}>
          <TouchableOpacity
            onPress={() => this.drawerButton(this.props.navigation)}
          >
            <Animated.View style={{ opacity: navbarOpacity }}>
              <Icon
                name="ios-menu"
                style={styles.icon}
              />
            </Animated.View>
          </TouchableOpacity>
          <Animated.Text style={[styles.title, { opacity: navbarOpacity }]}>
            {this.props.title}
          </Animated.Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.headerBackground,
        overflow       : 'hidden',
        height         : Metrics.headerHeight,
      },
      bar: {
        marginTop       : Metrics.statusBarHeight + 10,
        height          : 32,
        alignItems      : 'center',
        justifyContent  : 'space-between',
        flexDirection   : 'row',
        marginHorizontal: 20,
      },
      title: {
        backgroundColor: 'transparent',
        color          : 'white',
        fontSize       : 20,
        textAlign      : 'center',
        fontFamily     : Fonts.type.global,
      },
      icon: {
        color   : 'white',
        fontSize: 28,
    },
});

