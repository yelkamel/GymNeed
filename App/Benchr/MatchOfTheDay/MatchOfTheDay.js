import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images, Colors } from '../Themes'
import BCH_Header from '../Header/BCH_Header'
import TextManager from '../TextManager/TextManager'
import LinearGradient from 'react-native-linear-gradient';

import BCH_MainSeparator from '../Separator/BCH_MainSeparator'
import BCH_NextEventList from './BCH_NextEventList'
// Styles
import styles from './MatchOfTheDayStyles'
import Swiper from 'react-native-swiper';

export default class MatchOfTheDay extends Component {

  static navigationOptions =  ({navigation}) => ({
    title: TextManager.t('MENU_MATCHS_OF_THE_DAY_TITLE'),
    headerTitleStyle: {color: Colors.headerTitleColor}
  })


  render () {
    return (
        <LinearGradient colors={[Colors.motdGradient1, Colors.motdGradient2]} style={styles.mainContainer}>
         <BCH_MainSeparator/>
         <Swiper 
            style={styles.swiper} 
            showsButtons={true}
            loop={false}
            dot={<View style={styles.dot}/>}
            paginationStyle={styles.paginationStyle} 
            >
           <BCH_NextEventList/>
           <BCH_NextEventList/>
           
           <BCH_NextEventList/>
           
        </Swiper>
        </LinearGradient>
    )
  }
}
