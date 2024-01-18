

import {useState} from 'react'
import { API_KEY, API_URL,LATITUD,LONGITUDE } from '../constants'
import { getDate } from '../utils/dates';
import { weatherImage } from '../utils/getWeather';

const Hero = () => {

    const [temperature, setTemperature] = useState(null);
    const [weather, setWeather] = useState(null);
    const [date, setDate] = useState(null);
    const [location, setLocation] = useState(null);

    const getWeather = async () => {

        const response = await fetch(`${API_URL}lat=${LATITUD}&lon=${LONGITUDE}&${API_KEY}`);
    
        const data = await response.json();
        const kelvin=data.current.temp;
        const celsius= kelvin - 273.15;
        setTemperature(celsius);
    
        const currentWeather= data.current.weather[0].description;
        setWeather(currentWeather);
    
        const currentDate= getDate(data.current.dt*1000);
        setDate(currentDate);
    
        const currentLocation= data.timezone;
        setLocation(currentLocation);
    
    }
    
  return (
    <div>
        <div>
            <button>Search for places</button>
        </div>
        <div>
            <img src={weatherImage(currentWeather)} alt="hero" />
        </div>
        <div>
            <h1>{temperature}</h1>
        </div>
        <div>
            <h3>C{weather}</h3>
        </div>
        <div>
            <p>{date}</p>
        </div>
        <div>
            <p>{location}</p>
        </div>
    </div>
  )
}

export default Hero