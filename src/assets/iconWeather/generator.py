iconList = [
    {"id":"01d","icon":"wi-day-sunny"},
    {"id":"01n","icon":"wi-night-clear"},
    {"id":"02d","icon":"wi-day-cloudy"},
    {"id":"02n","icon":"wi-night-alt-cloudy"},
    {"id":"03d","icon":"wi-cloud"},
    {"id":"03n","icon":"wi-cloud"},
    {"id":"04d","icon":"wi-cloudy"},
    {"id":"04n","icon":"wi-cloudy"},
    {"id":"09d","icon":"wi-day-rain"},
    {"id":"09n","icon":"wi-night-alt-rain"},
    {"id":"10d","icon":"wi-day-rain-mix"},
    {"id":"10n","icon":"wi-night-alt-rain-mix"},
    {"id":"11d","icon":"wi-day-thunderstorm"},
    {"id":"11n","icon":"wi-night-alt-thunderstorm"},
    {"id":"13d","icon":"wi-snowflake-cold"},
    {"id":"13n","icon":"wi-snowflake-cold"},
    {"id":"50d","icon":"wi-day-windy"},
    {"id":"50n","icon":"wi-night-alt-cloudy-windy"},
]

importString = ""
iconNameList = ""

for element in iconList:
    importName:str = element['icon'].capitalize()
    _id = element["id"]
    importName = ''.join(f'{i}{_id}' for i in importName.split("-"))
    importString += f"import {{ ReactComponent as {importName}}} from './svg/{element['icon'] }.svg';\n"
    iconNameList += f"'{_id}':<{importName}/>,\n"


StringBuffer = f'''
import React from 'react';
{importString}
import {{ ReactComponent as NaIcon }} from './svg/wi-na.svg';

export const iconsList:any = {{{iconNameList}}}

export function getIcon(id:any){{
    if(!iconsList[id])
        return <NaIcon/>
    return iconsList[id]
}}

'''

print("Start Generating...")

file = open('icons.tsx', 'w')
print("OKAY!")
file.write(StringBuffer)