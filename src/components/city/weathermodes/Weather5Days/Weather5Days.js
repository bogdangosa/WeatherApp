import react,{useState,useEffect} from "react";
import WeatherToday from "../WeatherToday/WeatherToday";
import './Weather5Days.css';

const Weather5Days = (props) =>{
    
    const getArrayOfWeather = () =>{
        const array = Object.values(props.data.list);
        console.log(array);
        return array;
    }

    return(
        <div className="wrapper2">
        {props.data.list!=undefined?    
        <div className="Weather5Days">
            {getArrayOfWeather().map((weather,index)=>{
                return(
                    <WeatherDay weather={weather} key={index}/>
                )
            })}

        </div>
        :<></>}
        </div>
    )
}


const WeatherDay = (props) =>{
    
    const Kelvin0deg = 273.15;

    const getDate = (date_unix) =>{
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let date = new Date(date_unix*1000);
        let year = date.getFullYear();
        let month = months[date.getMonth()];
        let curent_date = date.getDate();
        return(curent_date+' '+month+' '+year);
    } 
    const getHour = (date_unix) =>{
        let date = new Date(date_unix*1000);
        let hours = date.getHours();
        return(hours+":00 ");
    }

    const getTemp = (temp) =>{
        const temp_string = (Math.round((temp - Kelvin0deg) * 100) / 100).toString() + " °";
        return temp_string
    }



    return (
        <div className="WeatherDay">
            <div className="main-weather-data-day">
                <div className="date-container">
                    <p>{getHour(props.weather.dt)}</p>
                    <p>{getDate(props.weather.dt)}</p>
                </div>
                <p className="weather-day-temp">{getTemp(props.weather.main.temp_max)+" / "+getTemp(props.weather.main.temp_min)}</p>
                <p className="weather-day-main-text">{props.weather.weather[0].main}</p>
            </div>
            <img src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} className="day-weather-icon"></img>
        </div>
    )
}

export default Weather5Days;