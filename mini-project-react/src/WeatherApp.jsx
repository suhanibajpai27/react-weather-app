import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){

  const[weatherInfo,setWeatherInfo]=useState({
    city:"Mumbai",
    feelsLike: 32.57,
    humidity: 78,
    temp: 28.32,
    tempMax: 28.32,
    tempMin: 28.32,
    weather: "heavy intensity rain",
  });


  let updateInfo=(newInfo)=>{
  setWeatherInfo(newInfo);
  }

  return(
    <div>
      <h3 style={{textAlign:"center"}}>Weather App</h3>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}