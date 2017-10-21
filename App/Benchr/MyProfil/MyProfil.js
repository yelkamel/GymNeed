import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images, Colors } from '../Themes'
import BCH_Header from '../Header/BCH_Header'
import TextManager from '../TextManager/TextManager'
// Styles
import styles from './MyProfilStyles'

export default class MyProfil extends Component {

  static navigationOptions =  ({navigation}) => ({
    title: TextManager.t('MENU_PROFILE_TITLE'),
    headerTitleStyle: {color: Colors.headerTitleColor}    
  })


  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>


        </ScrollView>
      </View>
    )
  }
}
