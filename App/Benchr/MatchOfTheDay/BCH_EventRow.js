import React from 'react'
import { StyleSheet, TouchableHighlight, Text, ListView,View, Image } from 'react-native'
import {Images, Colors, Metrics} from '../Themes'
import ResponsiveImage from 'react-native-responsive-image'
import {getEventInfo} from '../Service/BCH_WS_Event'
import  {S3_ASSETS} from '../Constant/BCH_URL'
import  {INTERVAL_UPDATE} from '../Constant/BCH_URL'
import TextAutoSized from '../TextManager/TextAutoSized'

import BCH_EventScore from './BCH_EventScore'


export default class BCH_EventRow extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            eventInfo:null,
            isLoading: true
        };
    
      }
    
    componentWillMount(){
    // setInterval(() => {
         getEventInfo(this.props.rowData.id).then(responseData => { 
            //console.log("EventRowInfo: " + JSON.stringify(responseData))  
            
            if (JSON.stringify(this.state.eventInfo) != JSON.stringify(responseData)){
             this.setState({
                eventInfo: responseData.resp,
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
        <TouchableHighlight onPress={()=> {
            this.props.selectRow(this.props.rowID)}}>
            <View style={[styles.rowView, 
                (this.props.isSelected) ? {backgroundColor:Colors.selectRowColor} : {backgroundColor: 'transparent'
                }]}>


                <View style={{
                    width:Metrics.screenWidth*0.4, 
                    justifyContent: 'flex-end',
                    flexDirection: 'row'
                }}>
                <View style={[styles.centeredCol ]}>
                <TextAutoSized 
                height={20}
                width={Metrics.screenWidth*0.4 - 60}
                style={[styles.eventText, {textAlign: 'right'}]}>
                {this.state.eventInfo.hi.n}
                </TextAutoSized>
                </View>

                <View style={styles.centeredCol}>
                <ResponsiveImage 
                source={{uri: S3_ASSETS + this.state.eventInfo.hi.ui}}
                initWidth="30"
                initHeight="30"/>
                </View>
                </View>

                <View style={[styles.centeredCol ]}>
                <BCH_EventScore 
                homeScore={this.state.eventInfo.hsc}
                visitorScore={this.state.eventInfo.vsc}
                startTime={this.state.eventInfo.s}
                eventStatus={this.state.eventInfo.st}/> 
                </View>
              

                <View style={{
                    width:Metrics.screenWidth*0.4, 
                    justifyContent: 'flex-start',
                    flexDirection: 'row'
                }}>
                <View style={styles.centeredCol}>
                <ResponsiveImage 
                source={{uri: S3_ASSETS + this.state.eventInfo.vi.ui}}
                initWidth="30"
                initHeight="30"/>
                </View>
                <View style={styles.centeredCol}>
                <TextAutoSized 
                height={20}
                width={Metrics.screenWidth*0.4 - 60}
                style={styles.eventText}>
                {this.state.eventInfo.vi.n}
                </TextAutoSized>
                </View>
                </View>

            </View>
        </TouchableHighlight>
        )
    }
}

const styles =StyleSheet.create({

     centredRow:{
        flexDirection: 'row', 
        justifyContent:'center'
     },
    centeredCol:{
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    eventText:{
        color: 'white',
      //  fontFamily: "AvenirLTStd-Medium",
    },
    rowView:{
        flexDirection: 'row',
        height: 45
    }
  });
  
