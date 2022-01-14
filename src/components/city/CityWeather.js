import react, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './CityWeather.css';
import WeatherToday from "./weathermodes/WeatherToday/WeatherToday";
import Weather5Days from './weathermodes/Weather5Days/Weather5Days';

const CityWeather = (props) =>{
    const {city_name} = useParams();
    const onSearch = props.onSearch;
    const setWeatherDataMode = props.setWeatherDataMode;

    useEffect(()=>{
        if(props.data==undefined){
            onSearch(city_name);
            console.log("got here");
        }

    },[]);



    return(
        <div className="wrapper">
        {props.data!=undefined ?
        <div className="CityWeather">

            <div className="upper-section-cityweather">
                <p className="City-Name">{city_name}</p>
                <div className="nav-weather-mode">
                    <div className="weather-mode-link" onClick={()=>setWeatherDataMode("Today",city_name)}>
                        <p className="weather-mode-link-text">Today</p>
                        <div className={props.WeatherDataMode=="Today"?"weather-mode-link-line visible":"weather-mode-link-line"}></div>
                    </div>
                    <div className="weather-mode-link" onClick={()=>setWeatherDataMode("5Days",city_name)}>
                        <p className="weather-mode-link-text">5 Days</p>
                        <div className={props.WeatherDataMode=="5Days"?"weather-mode-link-line visible":"weather-mode-link-line"}></div>
                    </div>

                </div>
            </div>
            {
                props.WeatherDataMode=="Today"?
                <WeatherToday data={props.data} />
                :
                <Weather5Days data={props.data}/>

            }
        </div>
        :<></>}
        </div>
    )
}

export default CityWeather;