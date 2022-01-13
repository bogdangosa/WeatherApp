import react from "react";
import './WeatherToday.css';

const WeatherToday = (props) =>{
    const Kelvin0deg = 273.15;

    return(
        <div className="WeatherToday">
                <p className="City-Temp">{(Math.round((props.data.main.temp - Kelvin0deg) * 100) / 100)+" °C"}</p>
                <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}></img>
                <div className="today-stats">
                    <p className="weather-description today-stat">{props.data.weather[0].main}</p>
                    <p className="today-stat">{"real feal:  "+(Math.round((props.data.main.feels_like - Kelvin0deg) * 100) / 100)+" °C"}</p>
                    <p className="today-stat">{"wind:  "+props.data.wind.speed+'km/h'}</p>
                    <p className="today-stat">{"humidity:  "+props.data.main.humidity+'%'}</p>
                </div>
        </div>
    )
}

export default WeatherToday;