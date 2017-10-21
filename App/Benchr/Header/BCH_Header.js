import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import styles from './BCH_HeaderStyles'
import { NavigationActions } from 'react-navigation'
import {Images, Colors} from '../Themes'
import LinearGradient from 'react-native-linear-gradient';

import Svg, {Path} from 'react-native-svg'
import ResponsiveImage from 'react-native-responsive-image'

export default class BCH_Header extends Component {
    static propTypes = {
      navigator: PropTypes.object,
      sceneTitle: PropTypes.string
    }

    constructor(props){
        super(props);
        this.state = {
            headerTitle: (this.props.scene == null) ? "Match Of The Day" : this.props.scene 
        }
    }

    imageHeaderCheck (scene) {
      switch (scene) {
        case "MatchOfTheDay":
          return Images.Header_Icon_Points
          break;
        case "MyProfil":
          return Images.Header_Create_account
          break;
        default:
          return Images.Header_Icon_Points
        
      }
    }

    render () {
      console.log("TEST " + this.props.sceneTitle)
      
      return (
          <LinearGradient colors={['#1b385f', '#0c284d']} style={styles.container}>
            <ResponsiveImage source={this.imageHeaderCheck(this.props.sceneTitle)}
              initWidth="20"
              initHeight="20"/>
            <Text style={styles.headerText}>{this.props.sceneTitle} </Text> 
            <View style={styles.HeaderPointsView}>
              <Text style={styles.headerText}> XXX XXXX</Text> 
              <ResponsiveImage source={Images.Header_Icon_Points}
              initWidth="20"
              initHeight="20"/>
            </View>

        </LinearGradient>
       )
    }
  }