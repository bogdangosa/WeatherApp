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

    return (
        <div className="WeatherDay">
            <p>{getDate(props.weather.dt)}</p>
            <p>{(Math.round((props.weather.main.temp - Kelvin0deg) * 100) / 100)+" °C"}</p>
            <p>{props.weather.weather[0].main}</p>
            <img src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}></img>
        </div>
    )
}

export default Weather5Days;