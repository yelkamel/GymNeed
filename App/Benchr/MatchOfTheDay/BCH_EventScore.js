import React from 'react'
import { StyleSheet, Switch, Text, View, Image } from 'react-native'
import {Images, Colors, Metrics} from '../Themes'
import  {MATCH_STATUS} from '../Constant/BCH_STATUS'


import {convertUTCtoTime} from '../Transform/UTCManager'
import {matchStatusToColor} from '../Transform/BCH_StatusManager'

export default class BCH_EventScore extends React.Component {



  render() {
    return (
        <View style={[styles.centeredImg ]}>
            <View style={styles.mainContainer}>
                <View style={styles.centerCol}>
                <View style={styles.eventScoreView}>
                    <Text style={styles.eventScore}>
                    {(this.props.homeScore == null) ? 0 : this.props.homeScore}
                    </Text>
                </View>
                </View>
                <View style={styles.eventTimeView}>
                    <View style={styles.centerRow}>
                        <Text style={styles.eventTime}>
                            {convertUTCtoTime(this.props.startTime)}
                        </Text>
                    </View>

                    <View style={styles.centerRow}>
                        <View style={[styles.eventStatusPointView, 
                        {
                            backgroundColor: matchStatusToColor(this.props.eventStatus)
                        }]}>
                    </View>
                </View>
            </View>

           <View style={styles.centerCol}>
                <View style={styles.eventScoreView}>
                    <Text style={styles.eventScore}>
                        {(this.props.visitorScore == null) ? 0 : this.props.visitorScore}
                    </Text>
                </View>
            </View>

            </View>
         </View>
    )
  }
}

const styles =StyleSheet.create({
    mainContainer:{
        width:Metrics.screenWidth*0.2, 
        height: 45,
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    eventScoreView:{
        height: 25,
        width: 20,
        borderRadius: 3,
        backgroundColor: Colors.eventScore,
     },
    eventScore:{
       color: "white",
       fontSize: 20,
       textAlign: 'center'
    },
    centerRow:{
        flexDirection: 'row', 
        justifyContent:'center'
     },
     centerCol:{
        flexDirection: 'column', 
        justifyContent:'center',
     },
    eventTime:{
        color: "white",
        fontSize: 10,
        margin: 2,
     },
     eventTimeView:{
        flexDirection:'column',
     },

    eventStatusPointView:{
        width:8, 
        height:8, 
        borderRadius: 100,
    }
  });
  
