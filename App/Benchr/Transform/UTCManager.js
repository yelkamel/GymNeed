import moment from 'moment'

export function convertUTCtoString (value) {
    var strDate = moment(value).format('MMMM Do YYYY')
    return strDate
}

export function convertUTCtoTime (value) {

    var date = new Date(value * 1000)
    var hours= (date.getHours() == 0) ? '00' : date.getHours()
    var minutes= (date.getMinutes() == 0) ? '00' : date.getMinutes()
    return (hours+ "h"+ minutes)
}



export function getCurrentUTCDay(){
    // TODO : use Time.js in transform


    var now = new Date();

    var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  0, 0, 0);
    var UTCday = 1505433600

    return UTCday;    

}