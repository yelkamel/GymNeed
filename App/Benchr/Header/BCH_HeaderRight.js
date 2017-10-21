import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback,TouchableOpacity, View, Text, Image } from 'react-native'
import styles from './BCH_HeaderRightStyles'
import {Images, Colors} from '../Themes'
import ResponsiveImage from 'react-native-responsive-image'

export default class BCH_HeaderRight extends Component {
    static propTypes = {
      navigator: PropTypes.object,
    }

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render () {
      
      return (
        <View style={styles.HeaderPointsView}>
              <Text style={styles.headerText}> 12 987</Text> 
              <ResponsiveImage source={Images.Header_Icon_Points}
              initWidth="20"
              initHeight="20"/>
            </View>
       )
    }
  }