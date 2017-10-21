import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');


// IOS & ANDROID SIZE SPECIFICATION
const  statusBarHeight = (Platform.OS === 'ios') ? 20 : 0;

// Used via Metrics.baseMargin
const metrics = {
  screenWidth     : width < height ? width : height,
  screenHeight    : width < height ? height : width,
  drawerButtonSize: 40,
  tchatButtonSize : 50,
  headerHeight    : 150,
  statusBarHeight : (Platform.OS === 'ios') ? 20 : 0,

  icons: {
    tiny  : 15,
    small : 20,
    medium: 30,
    large : 45,
    xl    : 50,
  },
  images: {
    small : 20,
    medium: 40,
    large : 60,
    logo  : 200,
  },
};

export default metrics;
