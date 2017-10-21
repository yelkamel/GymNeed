import React from 'react'
import { StyleSheet, Switch, Text, View, Image } from 'react-native'
import {Images, Colors, Metrics} from '../Themes'
import ResponsiveImage from 'react-native-responsive-image'
import TextManager from '../TextManager/TextManager'
import LinearGradient from 'react-native-linear-gradient';


export default class BCH_MainSeparator extends React.Component {
 

  render() {
    return (
        <View style={styles.mainSeparator}>
        </View>
    )
  }
}

const styles =StyleSheet.create({
  container:{
    justifyContent: 'center'
  },
  mainSeparator:{
      backgroundColor: Colors.separator,
      height: 3,
      width: Metrics.screenWidth ,
      borderRadius: 100,
      shadowOffset:{  width: 3,  height: 3,  },
      shadowColor: 'black',
      shadowOpacity: 1.0,

  }
  });
  
