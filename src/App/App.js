import react,{useState,useEffect} from 'react';
import './App.css';
import Header from '../components/navigation/Header';
import Searchbar from '../components/search-bar/Searchbar';
import CityWeather from '../components/city/CityWeather'
import {Route,Routes, useNavigate} from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';


const App = () => {
  const [SearchText,setSearchText] = useState("");
  const [WeatherData,setWeatherData] = useState();
  const [WeatherDataMode,setWeatherDataMode] = useState("Today");
  const API_ID = "db3ad01e1de29930c650f0c4887c7257";
  const navigate = useNavigate();



  const Search = async (search_bool,weathermode,city) =>{
    let mode="weather";
    if(weathermode!="Today")
      mode="forecast";
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/${mode}?q=${city}&appid=${API_ID}`);
      
    const result = await response.json();

    console.log(result);

    if(result.cod==200){
      setWeatherData(result);
      if(search_bool)
        navigate(`/${result.name}`);
    }
    else{
      navigate(`/404`);
    }
  }

  const ChangeWeatherDataMode = async(weathermode,city_name)=>{
    if(weathermode!=WeatherDataMode){
        setWeatherDataMode(weathermode);
        console.log(weathermode);
        Search(false,weathermode,city_name);
    }
  }

  return (
      <div className="App">
        <div className='Background'></div>
        <Header/>
        <Searchbar className="SearchbarExtra" SearchText={SearchText} setSearchText={(text)=>setSearchText(text)} onSearch={()=>Search(true,WeatherDataMode,SearchText)}/>
          <Routes>
          <Route path={`/`} element={<></>}/>
            <Route path={`/404`} element={<NotFound/>}/>
            <Route path={`:city_name`} element={<CityWeather data={WeatherData} onSearch={(city)=>Search(true,WeatherDataMode,city)} WeatherDataMode={WeatherDataMode} setWeatherDataMode={(mode,city_name)=>ChangeWeatherDataMode(mode,city_name)}/>}/>
          </Routes>
      </div>
  );
}

export default App;
