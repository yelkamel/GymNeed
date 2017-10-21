import {WS_URL} from '../Constant/BCH_URL'
import {getCurrentUTCDay} from '../Transform/UTCManager'

export async function getNextEventList () {


    var currentUTCday = getCurrentUTCDay()
    var myBody = {
        "rk"	: 12 			,
        "rts"	: 1223			,
        "s"		: 2017			,
        "d"		: currentUTCday
    }

    var myHeaders= new Headers({
        'Content-Type': 'application/json',     
        'charset':'UTF-8'   
    }) 
    
    var myInit = { method: 'POST',
                   body: JSON.stringify(myBody),
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' 
    };

    var myRequest = new Request(WS_URL + '/database/1/nextEvent/getList',myInit);
    
    var response =  await fetch(myRequest,myInit)
    var responseData = await response.json();
    
    return (responseData)
}

export async function getEventInfo(value){

    var myBody = {
        "eid"	: value,
        "rk"	: 12 	,
        "rts"	: 1223,
        "s"		: 2017,
    }

    var myHeaders= new Headers({
        'Content-Type': 'application/json',     
        'charset':'UTF-8'   
    }) 
    
    var myInit = { method: 'POST',
                   body: JSON.stringify(myBody),
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' 
    };

    var myRequest = new Request(WS_URL + '/database/1/event/getInfo',myInit);
    
    var response =  await fetch(myRequest,myInit)
    var responseData = await response.json();
    
    return (responseData)
    
}