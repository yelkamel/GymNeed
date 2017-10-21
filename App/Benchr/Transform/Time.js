"use strict";
const moment            = require('moment-timezone');
const env               = {
    isDevelopment : () =>{return true}
}
//**************************************************************************
//**************************************************************************
const secondToMillisec  = 1000;
const minuteToSecond    = 60;
const secondToMinute    = 1/minuteToSecond;
const hourToMinute      = 60;
const hourToSecond      = hourToMinute * minuteToSecond;
const dayToHour         = 24;
const dayToSecond       = hourToSecond * dayToHour;
//**************************************************************************
//**************************************************************************
let g_Tick              = 0;

let g_TimeStampTick     = -1;
let g_TimeStamp         = 0;

let g_NowTick           = -1;
let g_Now               = null;

let g_TodayTick         = -1;
let g_Today             = null;

let g_ForceDate         = null;
//**************************************************************************
//**************************************************************************
// launch Tick!!!
Tick();
function Tick()
{
    g_Tick++;
    
    g_TimeStampTick = -1;
    g_NowTick       = -1;
    g_TodayTick     = -1;

    setImmediate(Tick);     
}
//**************************************************************************
//**************************************************************************
moment.tz.setDefault('Etc/UTC');
//**************************************************************************
//**************************************************************************
const g_TimeZoneAbbr = 
{
    'BST' : 'Europe/London',
};

function getTimeZone(timeZone)
{
    return g_TimeZoneAbbr[timeZone] || timeZone;
}
//**************************************************************************
//**************************************************************************
class CTime
{
    static fromUnix(unix)
    {
        const time = new CTime();
        return time.fromEpoch(unix);
    }
    constructor(formattedDate,format,timeZone)
    {
        if (timeZone)   this.time = moment.tz(formattedDate,format,getTimeZone(timeZone)).unix();
        else            this.time = moment   (formattedDate,format                      ).unix();

        if (env.isDevelopment() && (!formattedDate) && g_ForceDate)
        {
            this.time    = g_ForceDate + this.getSecondsOfDay();
            return this;
        }
    }

    now()
    {
        this.time = moment().unix();

        if (env.isDevelopment() && g_ForceDate)
        {
            this.time = g_ForceDate + this.getSecondsOfDay();
            return this;
        }

        return this;
    }

    today()
    {
        if (env.isDevelopment() && g_ForceDate)
        {
            this.time = g_ForceDate;
            return this;
        }

        this.now()
            .addSecondes(-this.getSecondsOfDay());

        return this;
    }

    fromEpoch        (epoch)                   {        this.time = epoch;                                      return this;    }
    fromFormattedDate(formattedDate,format)    {        this.time = moment(formattedDate,format).unix();        return this;    }

    value   ()    { return this.time;    }
    epoch   ()    { return this.time;    }
    unix    ()    { return this.time;    }
    moment  ()    { return moment.unix(this.time);    }
    
    format(strFormat,tz)
    {
        const m = moment.unix(this.time);
        if (tz)
        {
            return m.tz(tz).format(strFormat);
        }

        return m.format(strFormat);
    }

    //------------------------------------------------
    isLaterFrom(other)
    {
        const delta = this.unix() - other.unix();
        return delta > 0;
    }

    isEqualFrom(other)
    {
        const delta = this.unix() - other.unix();

        return delta==0;
    }

    isEarlierFrom(other)
    {
        const delta = this.unix() - other.unix();
        return delta < 0;
    }

    compareTo(other)
    {
        return this.unix() - other.unix();
    }
    //------------------------------------------------    
    addSecondes (seconds)   { this.time += seconds;                  return this;    }
    addMinutes  (minutes)   { this.time += minutes * minuteToSecond; return this;    }
    addHours    (hours)     { this.time += hours * hourToSecond ;    return this;    }
    addDays     (day)       { this.time += day * dayToSecond ;       return this;    }
    //------------------------------------------------
    clearHms()
    {
        this.addSecondes(-this.getSecondsOfDay());
        return this;
    }
    //------------------------------------------------
    getHour         ()    { return this.moment().hour        ();   }
    getMinute       ()    { return this.moment().minute      ();   }
    getSecond       ()    { return this.moment().second      ();   }
    getYear         ()    { return this.moment().year        ();   }
    getMonth        ()    { return this.moment().month       ()+1; }
    getDate         ()    { return this.moment().date        ();   }
    getDayOfYear    ()    { return this.moment().dayOfYear   ();   }   
    getWeekOfYear   ()    { return this.moment().week        ();   }

    getUnixDay     ()    { return this.time - this.getSecondsOfDay(); }
    getMinutesOfDay()
    {
        const m = this.moment();

        return m.hour() * hourToMinute + m.minute();
    }

    getSecondsOfDay()
    {
        const m = this.moment();

        return  (
                      m.hour  () * hourToMinute 
                    + m.minute()
                ) 
                * minuteToSecond
                + m.second();
    }

    getTimeForLocale(lang, format)
    {
        moment.locale(lang);
        return(moment().format(format));
    }
}
//**************************************************************************
//**************************************************************************
function forceDay(formattedDate,format)
{
    if (!env.isDevelopment())
        return;

    g_ForceDate = new CTime(formattedDate,format).unix();
}
//**************************************************************************
//**************************************************************************
module.exports = 
{
    class       : CTime,
    tick        : ()=>{ return g_Tick; },
    now         : ()=>
                    { 
                        if ( g_NowTick == -1 )
                        {
                            g_NowTick = 0;
                            g_Now     = new CTime();
                        }

                        return g_Now; 
                    },
    today       : ()=>
                    { 
                        if ( g_TodayTick == -1 ) // <--- can be more cached in fact!!!
                        {
                            g_TodayTick = 0;
                            g_Today     = new CTime().today();
                        }

                        return g_Today; 
                    },
    timeStamp   : ()=>
                    { 
                        if ( g_TimeStampTick == -1)
                        {
                            g_TimeStampTick = 0;
                            g_TimeStamp     = new CTime().unix ();
                        }

                        return g_TimeStamp; 
                    },
    const       :
    {
        secondToMillisec    : secondToMillisec  ,
        minuteToSecond      : minuteToSecond    ,
        secondToMinute      : secondToMinute    ,
        hourToMinute        : hourToMinute      ,
        hourToSecond        : hourToSecond      ,
        dayToHour           : dayToHour         ,
        dayToSecond         : dayToSecond           
    },

    forceDay : forceDay
};