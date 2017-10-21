import React from 'react'
import { StyleSheet, Switch, Text, ListView,View, Image } from 'react-native'
import {Images, Colors, Metrics} from '../Themes'
import ResponsiveImage from 'react-native-responsive-image'
import BCH_EventRow from './BCH_EventRow'

export default class BCH_EventGrid extends React.Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
          eventList: ds.cloneWithRows(this.props.eventList),
          rowSelectedId: null
        };
    
      }
    
    componentWillMount(){

    }

    selectRow =(rowID) => {
      this.setState({
        rowSelectedId: rowID,
      })
      //this.state.eventList.rowShouldUpdate(0, rowID)
    }

    render() {
      
     return (
         <ListView
            dataSource= {this.state.eventList}
            renderRow={(rowData, sectionID, rowID, highlightRow) =>  
            <BCH_EventRow 
              selectRow={this.selectRow} 
              rowID={rowID}
              isSelected={(rowID == this.state.rowSelectedId)}
              rowData={rowData}/>}
            renderSeparator={()=> <View style={styles.basicSeparator}/>}/>
     )
  }
}

const styles =StyleSheet.create({
    basicSeparator:{
       height: 1,
       opacity: 0.6,
       backgroundColor: 'grey',
       width: Metrics.screenWidth
    },
    eventScore:{
       color: "white",
       fontSize: 25,
       margin: 2,
    },
    centeredImg:{
        flexDirection: 'column',
        justifyContent: 'center',
       // backgroundColor: 'red'
      },
      eventText:{
        color: "white",
        fontSize: 15,
        margin: 5
      },
      rowView:{
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        flexDirection: 'row'
      }
  });
  
