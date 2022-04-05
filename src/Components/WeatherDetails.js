import '../App.css'

const WeatherDetails = ({humidity, clouds, wind, feelsLike, visibility}) => {
  return (
    <div className='w-det f-f'>
      <h2 className='padding'>Weather Details</h2>
      <p>Feels like: {feelsLike} °C</p>
      <p>Visibility: {visibility / 1000} km</p>
      <p>Humidity: {humidity} %</p>
      <p>Cloudiness: {clouds} %</p>
      <p>Wind Speed: {wind} m/sec</p>
    </div>
  );
};

export default WeatherDetails;