import React from 'react'
import { TouchableHighlight,ScrollView, Text, View, Image } from 'react-native'
import {Images, Colors, Metrics} from '../Themes'
import ResponsiveImage from 'react-native-responsive-image'
import TextManager from '../TextManager/TextManager'
import BCH_ShadowSeparator from '../Separator/BCH_ShadowSeparator'
import styles from './BCH_NextEventListStyles'
import * as Animatable from 'react-native-animatable';

import BCH_EventGrid from './BCH_EventGrid'
import BCH_CompetitionRow from './BCH_CompetitionRow'

import BCH_MainSeparator from '../Separator/BCH_MainSeparator'

import {convertUTCtoString} from '../Transform/UTCManager'
import {getNextEventList, getEventInfo} from '../Service/BCH_WS_Event'
import {getCompetitionInfo} from '../Service/BCH_WS_Competition'
import {S3_ASSETS} from '../Constant/BCH_URL'

export default class BCH_NextEventList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nextEventList: null,
      competitionInfoList: [],
      isLoading: true,
    };

  }

  componentWillMount(){
      getNextEventList().then(responseData => {
        console.log("EventList: " + JSON.stringify(responseData))  
        
        if (JSON.stringify(this.state.eventInfo) != JSON.stringify(responseData)){
        this.setState({
          nextEventList: responseData.resp,
          isLoading: false,
        })
        

        /*
        responseData.resp.l.map((value, index) => {
              if (this.state.competitionInfoList == null){
                this.setState({
                  competitionInfoList: responseData.resp,
                })
              } else {
                this.setState({
                  competitionInfoList: this.state.competitionInfoList.concat(responseData.resp),
                  isLoading: false
                })
              }
          })*/
        }
      })  
  }

  componentDidMount(){

  }



  renderMOTDHeader(){
    return (
      <View style={styles.headerView}>
      <Text style={styles.nextEventText}>
       {TextManager.t('MENU_MATCHS_OF_THE_DAY_NEXT_EVENT')} : {convertUTCtoString(this.state.nextEventList.d * 1000)}
      </Text>

    </View>
    )
  }



  renderGridList (){
    return this.state.nextEventList.l.map((value, index) => {
      console.log("CompetitionInfo: " + JSON.stringify(value))
      return (
        <View key={index}>
          <BCH_CompetitionRow wid={value.wid} competitionId={value.c}/>
          <BCH_EventGrid eventList={value.l}/>
        </View>
      )
    })
  }

  render() {

    if (this.state.isLoading)
      return (<View><Text>is Loading</Text></View>)

    return (
      <View style={styles.mainContainer}>
        {this.renderMOTDHeader()}
        <BCH_MainSeparator/>
        <ScrollView>
        {this.state.nextEventList &&
          this.renderGridList()
        }
        </ScrollView>

      </View>
    )
  }
}
