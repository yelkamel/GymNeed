import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from 'Themes';

export default StyleSheet.create({
    mainContainer: {
       flex: 1,
    },
    scroll: {
        flex: 1,
        // height: Metrics.screenHeight * 0.8,
        // width : Metrics.screenWidth,
    },
    backgroundVideo: {
        position: 'absolute',
        top     : 0,
        left    : 0,
        bottom  : 0,
        right   : 0,
      },
    text: {
        fontFamily: Fonts.type.global,
        fontSize  : 15,
    },
});