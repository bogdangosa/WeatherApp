import react, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import './CityWeather.css';
import WeatherToday from "./weathermodes/WeatherToday/WeatherToday";
import Weather5Days from './weathermodes/Weather5Days/Weather5Days';

const CityWeather = (props) =>{
    const [WeatherMode,setWeatherMode] = useState("Today");
    const {city_name} = useParams();
    const onSearch = props.onSearch;

    useEffect(()=>{
        if(props.data==undefined){
            onSearch(city_name);
            console.log("got here");
        }

    },[]);

    const ChangeWeatherMode =(weathermode)=>{
        if(weathermode!=WeatherMode)
            setWeatherMode(weathermode);
    }


    return(
        <div className="wrapper">
        {props.data!=undefined ?
        <div className="CityWeather">

            <div className="upper-section-cityweather">
                <p className="City-Name">{city_name}</p>
                <div className="nav-weather-mode">
                    <a className="weather-mode-link" onClick={()=>ChangeWeatherMode("Today")}>
                        <p className="weather-mode-link-text">Today</p>
                        <div className={WeatherMode=="Today"?"weather-mode-link-line visible":"weather-mode-link-line"}></div>
                    </a>
                    <a className="weather-mode-link" onClick={()=>ChangeWeatherMode("5Days")}>
                        <p className="weather-mode-link-text">5 Days</p>
                        <div className={WeatherMode=="5Days"?"weather-mode-link-line visible":"weather-mode-link-line"}></div>
                    </a>

                </div>
            </div>
            {
                WeatherMode=="Today"?
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