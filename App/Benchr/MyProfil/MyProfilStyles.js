import { StyleSheet } from 'react-native'
import { Metrics, Colors,ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    backgroundColor: 'green'
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  header: {
    backgroundColor: Colors.headerColor,
    height: Metrics.navBarHeight,
  }
})
