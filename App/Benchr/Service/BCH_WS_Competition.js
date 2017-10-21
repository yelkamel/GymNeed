import {WS_URL} from '../Constant/BCH_URL'

export async function getCompetitionInfo (value) {



    var myBody = {
        "c"     : value	    ,
        "rk"	: 12    	,
        "rts"	: 1223
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

    var myRequest = new Request(WS_URL + '/database/1/competition/getInfo',myInit);
    
    var response =  await fetch(myRequest,myInit)
    var responseData = await response.json();
    
    return (responseData)
}
    