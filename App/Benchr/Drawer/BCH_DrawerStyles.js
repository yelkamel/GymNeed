import { Metrics, Colors, Fonts } from '../Themes'

export default {
    container: {
        flex: 1,
        backgroundColor: Colors.drawerBackground
    },
    logoDrawerView:{
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 20,
    },

    // TEXT
    drawerSeparatorView:{
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 10
        
    },
    drawerSeparator: {
        backgroundColor: 'white', 
        width: Metrics.screenWidth * 0.6, 
        height: 2,
        borderRadius: 100,
    },

    // BUTTON
    drawerButtonView: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal:  20
    },
    drawerButtonText:{
        color: 'white',
        fontSize: 20,
        marginHorizontal: 20
    },

    //SWITCH
    switchView:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginHorizontal: 20,
    },
    switchLabel:{
        color: 'white',
        fontSize: 18,
        marginBottom: 10
    },
    switchContainer:{
        justifyContent: 'center',
        flexDirection: 'row',
    }

}