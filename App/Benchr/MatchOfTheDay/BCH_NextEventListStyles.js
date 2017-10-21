import { StyleSheet } from 'react-native'
import { Metrics, Colors,ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer:{
    flex:1
  },
  centeredImg:{
    flexDirection: 'column',
    justifyContent: 'center',
   // backgroundColor: 'red'
  },
  headerView: {
    backgroundColor: Colors.primaryColors, 
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
    fontSize: 15,
    margin: 10
  },
  rowView:{
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})
