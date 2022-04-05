import '../App.css'
import { useState } from 'react';

const Button = ({weather}) => {

  const [celsious, setCelsious] = useState(0)

  return (
    <div>
      <h1 className='temp padding'> {celsious ? weather : (weather * 9/5 )+ 32} {celsious ? '°C' : '°F'}</h1>  
      <button className="button" onClick={() => setCelsious(!celsious)}>Change to {celsious? 'Fahrenheit' : 'Celcious'}</button>
    </div>
  );
}

export default Button;