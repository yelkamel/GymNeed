import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
//import styles from './Styles/SubjectStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

import ResponsiveImage from 'react-native-responsive-image'

class DrawerContent extends Component {

  componentDidMount () {
    /*BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })*/
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }


  handleMatchOfTheDay= () => {
    this.toggleDrawer()
    NavigationActions.MatchOfTheDay()
  }

  handleMyProfil= () => {
    this.toggleDrawer()
    NavigationActions.MyProfil()
  }



  render () {
    return (
      <ScrollView style={styles.container}>
        <ResponsiveImage source={Images.MascotteImg} style={styles.drawerLogo} initWidth="150" initHeight="150" />
          <DrawerButton style={
            {flex:1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}
            } text="Mon profil" onPress={this.handleMyProfil} />
          <DrawerButton style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}} text="Macth of The day" onPress={this.handleMatchOfTheDay} />

      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent