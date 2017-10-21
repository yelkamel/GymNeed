import { Metrics, Colors, Fonts } from '../../Themes'

export default {
  container: {
    height: Metrics.navBarHeight,
    width: Metrics.screenWidth,
    backgroundColor: Colors.headerColor,
    justifyContent: 'space-between',
    flexDirection: 'row',  
    paddingTop: Metrics.statusBarHeight
    
  },
  HeaderPointsView:{
    flexDirection: 'row',  
    paddingHorizontal: 10  
  },

  headerText:{
    color: 'white',
    marginHorizontal: 10
  },
  HeaderIconPoints:{
    width: 50,
    height: 50,
    backgroundColor: 'transparent'
  },
  menuButton:{
    width: Metrics.width / 2,
    height: Metrics.navBarHeight,
    backgroundColor: 'red',
  }
}
