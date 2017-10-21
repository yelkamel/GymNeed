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
    swiper: {
        justifyContent: 'flex-start',
        alignItems    : 'flex-start',
        height        : 180,
        width         : Metrics.screenWidth - 20,
    },
    slide: {
     margin: 10,
       // flex: 1,
    },
    text: {
        fontFamily: Fonts.type.global,
        fontSize  : 15,
    },
});