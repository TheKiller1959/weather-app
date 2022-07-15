import './assets/styles/App.css';
import { useState, useEffect } from 'react';
import Spinner from './Components/Spinner';
// import Loader from './Components/Loader';
import getWeather from './Services/getWeather';
import Weather from './Components/Weather';
import WeatherDetails from './Components/WeatherDetails';
import FullDate from './Components/FullDate';
import Footer from './Components/Footer';

function App() {

  const [location, setLocation] = useState(false);
  const [dataWeather, setDataWeather] = useState(false);
  const [weather, setWeather] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [icon, setIcon] = useState({});
  const [weatherName, setWeatherName] = useState('');
  const [clouds, setClouds] = useState(0);
  const [date, setDate] = useState('');
  const [windSpeed, setWindSpeed] = useState(0);
  const [feelsLike, setFeelsLike] = useState('');
  const [visibility, setVisibility] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation(true)
      getWeather(pos.coords.latitude, pos.coords.longitude)
        .then((res) => {
          setDataWeather(true);
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

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="App">
      {location && dataWeather ? (
        <div>
          <div className='principal'>
            <FullDate date={date} />
            <Weather icon={icon} weather={weather} weatherName={weatherName} city={city} country={country} location={location} />
          </div>
          <div className='scroll'>
            <p>Scroll down for more details</p>
          </div>
          <div className='details'>
            <WeatherDetails humidity={humidity} clouds={clouds} wind={windSpeed} feelsLike={feelsLike} visibility={visibility} />
          </div>
          <Footer />
        </div>) :
        <Spinner />
      }
    </div>
  );
}

export default App;
