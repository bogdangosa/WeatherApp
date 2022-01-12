import react, { useEffect } from "react";
import { useParams } from "react-router-dom";
import './CityWeather.css';

const CityWeather = (props) =>{
    const {city_name} = useParams();
    const Kelvin0deg = 273.15;

    useEffect(()=>{
    },[]);


    return(
        <div className="CityWeather">
            <p className="City-Name">{city_name}</p>
            <p className="City-Temp">{Math.round((props.data.main.temp - Kelvin0deg) * 100) / 100}</p>
            <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}></img>
        </div>
    )
}

export default CityWeather;