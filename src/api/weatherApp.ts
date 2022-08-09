import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import GetPosition from '../utils/getPositon';

class WeatherApp extends GetPosition{
    APIKEY: string;
    LANG: string;
    api: AxiosInstance;
    constructor() {
        super();
        this.APIKEY = process.env.REACT_APP_ACCUWEATHER_API_KEY || "";
        this.LANG = process.env.REACT_APP_LANG || "en";
        const BaseUrl = `https://api.openweathermap.org/data/2.5/`
        const _AxiosConfig:AxiosRequestConfig = {
            baseURL:BaseUrl,
        }

        this.api = axios.create(_AxiosConfig);
    }
    public async getByPosition(){
        const postion = await this.getPostion().catch(()=> ({
            latitude:0,
            longitude:0
        }))
        const parms = {
            units:'metric',
            lat:postion?.latitude,
            lon:postion?.longitude,
            appid:this.APIKEY,
            lang:this.LANG,
        }
        const data = (await this.api.get('weather',{params:parms,})).data
        return data;
    }
    public async getByName(name: string) {
        const parms = {
            units:'metric',
            q:name,
            appid:this.APIKEY,
            lang:this.LANG,
        }
        const data = (await this.api.get('weather',{params:parms,})).data
        return data;
    }
}

export default WeatherApp;