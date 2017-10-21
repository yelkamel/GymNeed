import React from 'react'
import { StyleSheet, TouchableHighlight, Text, ListView,View, Image } from 'react-native'
import {Images, Colors, Metrics} from '../Themes'
import ResponsiveImage from 'react-native-responsive-image'
import {getEventInfo} from '../Service/BCH_WS_Event'
import  {S3_ASSETS} from '../Constant/BCH_URL'
import  {INTERVAL_UPDATE} from '../Constant/BCH_URL'
import TextAutoSized from '../TextManager/TextAutoSized'

import BCH_EventScore from './BCH_EventScore'

import {getCompetitionInfo} from '../Service/BCH_WS_Competition'

export default class BCH_CompetitionRow extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            competitionInfo: {
                ui: 'leagues/10/105065432/2x/2016_flag_0001.png',
                n: 'TEST'
            },
            isLoading: true
        };
    
      }
    
    componentWillMount(){
    // setInterval(() => {
        getCompetitionInfo(this.props.competitionId).then(responseData => { 
            //console.log("EventRowInfo: " + JSON.stringify(responseData))  
            
            if (JSON.stringify(this.state.eventInfo) != JSON.stringify(responseData)){
             this.setState({
                competitionInfo: responseData.resp,
                isLoading: false
             })
            }
        })
     //}, INTERVAL_UPDATE)
    }
    


    renderTeam(){
       return(
       <View>

        </View>)
    }
    
    render(){

        if (this.state.isLoading)
            return (<View style={styles.rowView}>
                </View>)

        return (

            <View style={styles.subHeaderView}>
                <Text style={styles.nextEventText}>
                J {this.props.wid}
                </Text>
                <Text style={styles.nextEventText}>
                {this.state.competitionInfo.n}
                </Text>
                <View style={styles.centeredImg}>
                    <ResponsiveImage 
                    source={{uri: S3_ASSETS + this.state.competitionInfo.uf}}
                    initWidth="30"
                    initHeight="30"/>
                </View>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    centeredImg:{
        flexDirection: 'column',
        justifyContent: 'center',
    },
        headerView: {
        width: Metrics.screenWidth, 
        height:Metrics.screenHeight * 0.08,
        justifyContent: 'center',
        shadowOffset:{  height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
    },
        subHeaderView:{
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
        nextEventText:{
        color: "white",
        backgroundColor: 'transparent',
        fontSize: 15,
        margin: 10
    },
});
  
