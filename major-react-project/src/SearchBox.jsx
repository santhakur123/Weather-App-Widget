import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from "react";

function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState("");
     const API_URL="https://api.openweathermap.org/data/2.5/weather";
      const API_KEY="a7c65bb55b970f80efacc806269ea6e2";

      let getWeatherInfo=async()=>{
        try{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=matric`);
        let jsonResponse= await response.json();
        console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:json.Response.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,

        };
        console.log(result);
        return result;
    }catch(err){
        setError("No such place in our Api");
    }
      }

    
    
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };

    let handleSubmit=async (evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
    }

    return(<div className="SearchBox">
        <h1>Search for a weather</h1>
        <form onSubmit={handleSubmit}>
            
      <TextField id="city" label="City Name" variant="outlined"  required value={city} onChange={handleChange}/>
      <Button variant="contained" type="submit">Search</Button>
        </form>
    </div>)
}
export default SearchBox;