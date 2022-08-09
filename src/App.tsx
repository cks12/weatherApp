import React, { ChangeEventHandler, useCallback, useEffect, useMemo, useState } from 'react';
import { weatherAppTypes } from './api/weatherAppTypes';
import { getIcon } from './assets/iconWeather/icons'
import date, { dataInterface } from './utils/date';
import WeatherApp from './api/weatherApp';
import { ReactComponent as Search } from './assets/Search.svg';

import './global/styles.css'

function App() {
  const __Weatherapp = useMemo(() => new WeatherApp(),[]);
  const __Date = useMemo(() => new date(),[]);
  const [climaticInfo, setClimaticInfo] = useState<weatherAppTypes>();
  const [DateInfo, setDateInfo] = useState<dataInterface>();
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("city") || "");

  const updateSearchTearm = useCallback((e:any) => {
    setSearchTerm(e.target.value)
  },[]);

  const handleSearchCity = useCallback(async() => {
    const _climatic = await __Weatherapp.getByName(searchTerm.trim())
      .catch(async(err) => {
        console.log(err)
        localStorage.removeItem("city");
        return await __Weatherapp.getByPosition();
      });
      const __date = __Date.getData(_climatic.dt, _climatic.timezone );
      console.log(_climatic);
    setClimaticInfo(_climatic);
    setDateInfo(__date);
    localStorage.setItem("city",searchTerm.trim());
  },[searchTerm, __Date]);
  
  useEffect(() => {
    handleSearchCity();
  },[]);

    return (
      <>
    <div className={`application ${(climaticInfo?.weather[0].icon.search("n")) ? 'night' : "day"} ${climaticInfo?.weather[0].main||'Thunderstorm'}`}>
    <div className="contianer">

    <header>
      <h3>{DateInfo?.weekDay} - {DateInfo?.date}</h3>
      <h2>{DateInfo?.Hour} <span>{DateInfo?.Period}</span></h2>
    </header>
    <main>
      {
        getIcon(climaticInfo?.weather[0].icon)
      }
      <div className="group">
      <div className="tempeture">
        <span>{ Math.round(climaticInfo?.main.temp || 0) }</span>
        <small>°c</small>
      </div>
      <div className="climate">
        <span>{ climaticInfo?.weather[0].main.toUpperCase() }</span>
      </div>
      </div>
      <span className='loc'>{ climaticInfo?.name }</span>
      <span className='loc'>{ climaticInfo?.sys.country }</span>
    </main>
    </div>
    <footer>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSearchCity();
      }} className="inputGroup">
      <input 
        onChange={updateSearchTearm} value={searchTerm} type="text" />
      <button type='submit'>
        <Search/>
      </button>
      </form>
      <p>@Feito com amor em São Paulo</p>
      <a href="#">Github</a>
    </footer>
    </div>

    </>
  );
}

export default App;
