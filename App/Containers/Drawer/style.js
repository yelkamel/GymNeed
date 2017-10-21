import { Metrics, Colors, Fonts } from 'Themes';

export default {
    container: {
        flex           : 1,
        backgroundColor: Colors.drawerBackground,
    },
    logoDrawerView: {
        justifyContent: 'center',
        alignItems    : 'center',
        flexDirection : 'column',
        marginTop     : 30,
    },
    // TEXT
    text: {
        color           : Colors.text,
        fontSize        : 25,
        marginHorizontal: 20,
        fontFamily      : Fonts.type.global,
    },
    drawerSeparatorView: {
        justifyContent: 'center',
        flexDirection : 'row',
        marginVertical: 10,
    },
    drawerSeparator: {
        backgroundColor: 'white',
        width          : Metrics.screenWidth * 0.6,
        height         : 2,
        borderRadius   : 100,
    },
    // BUTTON
    drawerButtonView: {
        justifyContent  : 'flex-start',
        flexDirection   : 'row',
        marginVertical  : 10,
        marginHorizontal: 20,
    },
    drawerButtonText: {
        color           : Colors.text,
        fontSize        : 18,
        marginHorizontal: 20,
    },

    // SWITCH
    switchView: {
        justifyContent  : 'center',
        alignItems      : 'center',
        flexDirection   : 'column',
        marginHorizontal: 20,
    },
    switchLabel: {
        color       : Colors.text,
        fontSize    : Fonts.size.drawerText,
        marginBottom: 10,
    },
    switchContainer: {
        justifyContent: 'flex-end',
        alignItems    : 'center',
        flexDirection : 'column',
    },

};