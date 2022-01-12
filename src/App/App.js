import react,{useState,useEffect} from 'react';
import './App.css';
import Header from '../components/navigation/Header';
import Searchbar from '../components/search-bar/Searchbar';
import CityWeather from '../components/city/CityWeather'
import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom';


const App = () => {
  const [SearchText,setSearchText] = useState("");
  const [WeatherData,setWeatherData] = useState();
  const API_ID = "db3ad01e1de29930c650f0c4887c7257";
  const navigate = useNavigate();

  const Search = async () =>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${SearchText}&appid=${API_ID}`);
    const result = await response.json();
    console.log(result);
    if(result.cod==200){
      setWeatherData(result);
      navigate(`/${result.name}`);
    }
  }

  return (
      <div className="App">
        <div className='Background'></div>
        <Header/>
        <Searchbar className="SearchbarExtra" SearchText={SearchText} setSearchText={(text)=>setSearchText(text)} onSearch={()=>Search()}/>
          <Routes>
          <Route path={`/`} element={<></>}/>
            <Route path={`:city_name`} element={<CityWeather data={WeatherData}/>}/>
          </Routes>
      </div>
  );
}

export default App;
