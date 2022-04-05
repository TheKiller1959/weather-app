import axios from "axios";

const getWeather = async (lat, lon) =>{
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7bcb33950e4bb48fa8d48adac9dfbb61&units=metric`;
  const req = await axios(URL)
  return req
}

export default getWeather