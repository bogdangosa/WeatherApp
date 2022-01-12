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
            <div className="upper-section-cityweather">
                <p className="City-Name">{city_name}</p>
                <div className="nav-weather-mode">
                    <p className="weather-mode-link">Today</p>
                    <p className="weather-mode-link">Hourly</p>
                    <p className="weather-mode-link">10 days</p>

                </div>
            </div>
            <div className="TodayCityWeather">
                <p className="City-Temp">{(Math.round((props.data.main.temp - Kelvin0deg) * 100) / 100)+" °C"}</p>
                <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}></img>
                <div className="today-stats">
                    <p className="weather-description today-stat">{props.data.weather[0].main}</p>
                    <p className="today-stat">{"real feal:  "+(Math.round((props.data.main.feels_like - Kelvin0deg) * 100) / 100)+" °C"}</p>
                    <p className="today-stat">{"wind:  "+props.data.wind.speed+'km/h'}</p>
                    <p className="today-stat">{"humidity:  "+props.data.main.humidity+'%'}</p>
                </div>

            </div>
        </div>
    )
}

export default CityWeather;