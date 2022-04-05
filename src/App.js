import './App.css';
import {useState, useEffect} from 'react';
import getWeather from './Services/getWeather';
import Weather from './Components/Weather';
import WeatherDetails from './Components/WeatherDetails';
import FullDate from './Components/FullDate';

function App() {

  const [weather, setWeather] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [location, setLocation] = useState(false);
  const [icon, setIcon] = useState({});
  const [weatherName, setWeatherName] = useState('');
  const [clouds, setClouds] = useState(0);
  const [date, setDate] = useState('');
  const [windSpeed, setWindSpeed] = useState(0);
  const [feelsLike, setFeelsLike] = useState('')
  const [visibility, setVisibility] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation(true)
      getWeather(pos.coords.latitude, pos.coords.longitude)
      .then((res) => {
        setIcon(res.data.weather[0].icon);
        setWeather(res.data.main.temp);
        setWeatherName(res.data.weather[0].description);
        setHumidity(res.data.main.humidity);
        setCountry(res.data.sys.country);
        setCity(res.data.name);
        setClouds(res.data.clouds.all);
        setDate(res.data.dt);
        setWindSpeed(res.data.wind.speed);
        setFeelsLike(res.data.main.feels_like);
        setVisibility(res.data.visibility);
      })
    })
  }, []);  

  return (
    <div className="App">
      <div className='principal'>
        <FullDate date={date} />
        <Weather icon={icon} weather={weather} weatherName={weatherName} city={city} country={country} location={location} />
      </div>
      <div className='scroll'>
        <p>Scroll down for more details</p>
      </div>
      <div className='details'>
        <WeatherDetails humidity={humidity} clouds={clouds} wind={windSpeed} feelsLike={feelsLike} visibility={visibility}/>
      </div>
      <footer className='footer padding'>
        <div>
          <p> © CopperScorpion Services - All rights reserved</p>
          <p>Powered by OpenWeatherMap API</p>
          <p>2022</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
