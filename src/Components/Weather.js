import '../App.css'
import Button from '../Components/Button'

const Weather = ({icon, city, country, weatherName, weather, location}) => {

  const wName = weatherName.charAt(0).toUpperCase() + weatherName.slice(1)

  return (
    <div>
      <div className='f-f padding'>
        <h3>{city}, {country}</h3>
      </div>
        <p>{location}</p>
      <div>
        <p className='weather-name padding'>{wName}</p>
        <img className='img' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <Button weather={weather} />
      </div>
    </div>
  );
};

export default Weather;