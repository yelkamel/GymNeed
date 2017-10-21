import { StyleSheet } from 'react-native'
import { Metrics, Colors,ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex:1,
    backgroundColor: Colors.headerColor
  },
  swiper:{
  },
  dot:{
    backgroundColor:Colors.motdPagination, 
    width: 8, 
    height: 8,
    borderRadius: 4, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3,
  },
  paginationStyle:{
    position: "absolute",
    top: - Metrics.screenHeight *  0.75,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
