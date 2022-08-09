export interface weatherAppMain {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
}

export interface weatherAppSys {
    country: string, 
    type: number, 
    id: number, 
    sunrise: number, 
    sunset: number
}

export interface weatherAppWeather {
    description: string
    icon: string
    id: number
    main: string
}

export interface weatherAppTypes {
    base: string,
    clouds: {all: number}
    cod: number
    coord: {
        lon: number, 
        lat: number}
    dt: number
    id: number
    main: weatherAppMain
    name: string
    sys: weatherAppSys
    timezone: number
    visibility: number
    weather:  weatherAppWeather[]
    wind: {
        speed: number, 
        deg: number}

}