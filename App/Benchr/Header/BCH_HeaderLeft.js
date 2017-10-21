import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback,TouchableOpacity, View, Text, Image } from 'react-native'
import styles from './BCH_HeaderLeftStyles'
import {Images, Colors} from '../Themes'
import ResponsiveImage from 'react-native-responsive-image'

export default class BCH_HeaderLeft extends Component {
    static propTypes = {
      navigator: PropTypes.object,
    }

    constructor(props){
        super(props);
        this.state = {
        }
    }

    drawerButton = (navigation) => {

        if (navigation.state.index == 0){
            navigation.navigate('DrawerOpen')
          }
          else 
          {
            navigation.navigate('DrawerClose')
            
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
      
      return (
        <TouchableOpacity style={styles.touchableView}
        onPress={() => this.drawerButton(this.props.navigation) }>
        <ResponsiveImage source={Images.Header_Icon_League_Rank}
              initWidth="20"
              initHeight="20"/>    
        </TouchableOpacity>

       )
    }
  }