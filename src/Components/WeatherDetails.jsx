const WeatherDetails = ({ humidity, clouds, wind, feelsLike, visibility }) => {
  return (
    <div className='w-det f-f'>
      <h2 className='padding'>Weather Details</h2>
      <p><b>Feels Like: </b>{feelsLike} °C</p>
      <p><b>Visibility: </b>{visibility / 1000} km</p>
      <p><b>Humidity: </b>{humidity} %</p>
      <p><b>Cloudiness: </b>{clouds} %</p>
      <p><b>Wind Speed: </b>{wind} m/sec</p>
    </div>
  );
};

export default WeatherDetails;