import {WS_URL} from '../Constant/BCH_URL'

export function WS_POST_Fetch (body) {

    var myHeaders= new Headers({
        'Content-Type': 'application/json',     
        'charset':'UTF-8'   
    }) 
    
    var myInit = { method: 'POST',
                   body: JSON.stringify(body),
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' 
    };

    var myRequest = new Request(WS_URL + '/database/1/event/getInfo',myInit);
    
    var response = fetch(myRequest,myInit)
    .then((response) => {
        if(response.ok) {        
         return response.json();
        } 
        else {
            console.log('Network Bad Connection');
        }})
        .then((responseData)=> {
            return (responseData)     
        })
        .catch( (error) => {
            console.log("Fecth Error: " + error)
    }).done();

    return response
}
