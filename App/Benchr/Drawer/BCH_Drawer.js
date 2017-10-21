import React from 'react'
import { TouchableHighlight, ScrollView,Switch, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import styles from './BCH_DrawerStyles'
import {Images, Colors, Metrics} from '../Themes'
import ResponsiveImage from 'react-native-responsive-image'
import TextManager from '../TextManager/TextManager'


export default class BCH_Drawer extends React.Component {
  static navigationOptions =  ({navigation}) => ({

  })
  
  /*
  logout = () => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'MatchOfTheDay' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }
  */

  renderButton(type, image, label){
    return (
      <TouchableHighlight 
      onPress={() => this.props.navigation.navigate(type)}>
      <View style={styles.drawerButtonView} >
        <ResponsiveImage source={image}
          initWidth="20"
          initHeight="20"/>
        <Text style={styles.drawerButtonText}>
          {label}
        </Text>
      </View>
    </TouchableHighlight>
    )
  }

  renderSeparator(type, label) {
    return (
      <View style={styles.drawerSeparatorView}>
        <Text style={styles.drawerButtonText}>
          {label}
        </Text>
        <View style={styles.drawerSeparator}>
        </View>
      </View>
    )
  }

  renderSwitch(type, label){
    return (
    <View style={styles.logoDrawerView}>
      <View style={styles.switchView}>
      <Text style={styles.switchLabel}>
          {label}
      </Text>
      <Switch/>
      </View>
    </View>
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <ScrollView style={styles.container}>
        <View style={styles.logoDrawerView}>
          <ResponsiveImage source={Images.BM_Logo_Benchr}
            initWidth="141"
            initHeight="51"/>
        </View>
        
      {this.renderSeparator()}
      {this.renderButton('MyProfil', Images.BM_Icon_Return_match,TextManager.t('BURGERMENU_RETURN_TO_LIVE'))}
      {this.renderButton('MyProfil', Images.BM_Icon_Timeshifting, TextManager.t('BURGERMENU_TIMESHIFT'))}
      {this.renderSeparator()}

      {this.renderButton('MyProfil', Images.BM_Icon_Profil,TextManager.t('BURGERMENU_PROFIL'))}
      {this.renderButton('MyProfil', Images.BM_Icon_Dashboard,TextManager.t('BURGERMENU_DASHBOARD'))}
      {this.renderButton('MatchOfTheDay', Images.BM_Icon_MOTD,TextManager.t('BURGERMENU_MOTD'))}
      {this.renderButton('MyProfil', Images.BM_Icon_Rank,TextManager.t('BURGERMENU_LEAGUES'))}
      {this.renderSeparator()}
      {this.renderButton('MyProfil', Images.BM_Icon_Tuto, TextManager.t('BURGERMENU_TUTORIAL'))}
      {this.renderButton('MyProfil', Images.BM_Icon_Facebook_Share, TextManager.t('BURGERMENU_FB_SHARE_APP'))}
       
      <View style={styles.switchContainer}>
        {this.renderSwitch("sound", TextManager.t('BURGERMENU_SOUND'))}
        {this.renderSwitch("sound", TextManager.t('BURGERMENU_VIBRATIONS'))}
      </View>
      </ScrollView>
    )
  }
}
