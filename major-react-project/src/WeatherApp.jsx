import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import WInfoBox from "./WInfoBox.jsx"

function WeatherApp(){
  const [weather,setWeather]=useState({
    city:"WonderLand",
    fellsLike:25.05,
    tempMin:25.05,
    tempMax:25.05,
    humidity:47,
    weather:"haze",

  })

  let updateInfo=(newInfo)=>{
    setWeather(newInfo);
  }

    return(<div style={{textAlign:"center"}}>
        <h2>Weather App </h2>
        <SearchBox updateInfo={updateInfo}/>
        <WInfoBox info={weatherInfo}/>

    </div>)
};
export default WeatherApp;