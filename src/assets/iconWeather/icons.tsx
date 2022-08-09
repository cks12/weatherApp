
import React from 'react';
import { ReactComponent as Wi01dday01dsunny01d} from './svg/wi-day-sunny.svg';
import { ReactComponent as Wi01nnight01nclear01n} from './svg/wi-night-clear.svg';
import { ReactComponent as Wi02dday02dcloudy02d} from './svg/wi-day-cloudy.svg';
import { ReactComponent as Wi02nnight02nalt02ncloudy02n} from './svg/wi-night-alt-cloudy.svg';
import { ReactComponent as Wi03dcloud03d} from './svg/wi-cloud.svg';
import { ReactComponent as Wi03ncloud03n} from './svg/wi-cloud.svg';
import { ReactComponent as Wi04dcloudy04d} from './svg/wi-cloudy.svg';
import { ReactComponent as Wi04ncloudy04n} from './svg/wi-cloudy.svg';
import { ReactComponent as Wi09dday09drain09d} from './svg/wi-day-rain.svg';
import { ReactComponent as Wi09nnight09nalt09nrain09n} from './svg/wi-night-alt-rain.svg';
import { ReactComponent as Wi10dday10drain10dmix10d} from './svg/wi-day-rain-mix.svg';
import { ReactComponent as Wi10nnight10nalt10nrain10nmix10n} from './svg/wi-night-alt-rain-mix.svg';
import { ReactComponent as Wi11dday11dthunderstorm11d} from './svg/wi-day-thunderstorm.svg';
import { ReactComponent as Wi11nnight11nalt11nthunderstorm11n} from './svg/wi-night-alt-thunderstorm.svg';
import { ReactComponent as Wi13dsnowflake13dcold13d} from './svg/wi-snowflake-cold.svg';
import { ReactComponent as Wi13nsnowflake13ncold13n} from './svg/wi-snowflake-cold.svg';
import { ReactComponent as Wi50dday50dwindy50d} from './svg/wi-day-windy.svg';
import { ReactComponent as Wi50nnight50nalt50ncloudy50nwindy50n} from './svg/wi-night-alt-cloudy-windy.svg';

import { ReactComponent as NaIcon } from './svg/wi-na.svg';

export const iconsList:any = {'01d':<Wi01dday01dsunny01d/>,
'01n':<Wi01nnight01nclear01n/>,
'02d':<Wi02dday02dcloudy02d/>,
'02n':<Wi02nnight02nalt02ncloudy02n/>,
'03d':<Wi03dcloud03d/>,
'03n':<Wi03ncloud03n/>,
'04d':<Wi04dcloudy04d/>,
'04n':<Wi04ncloudy04n/>,
'09d':<Wi09dday09drain09d/>,
'09n':<Wi09nnight09nalt09nrain09n/>,
'10d':<Wi10dday10drain10dmix10d/>,
'10n':<Wi10nnight10nalt10nrain10nmix10n/>,
'11d':<Wi11dday11dthunderstorm11d/>,
'11n':<Wi11nnight11nalt11nthunderstorm11n/>,
'13d':<Wi13dsnowflake13dcold13d/>,
'13n':<Wi13nsnowflake13ncold13n/>,
'50d':<Wi50dday50dwindy50d/>,
'50n':<Wi50nnight50nalt50ncloudy50nwindy50n/>,
}

export function getIcon(id:any){
    if(!iconsList[id])
        return <NaIcon/>
    return iconsList[id]
}

