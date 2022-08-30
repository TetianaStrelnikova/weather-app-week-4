import './weather.css';
import React from 'react';
import Dateandtime from "./Dateandtime";
export default function Weather(){
return(
    
<div className="row weatherblock p-2" >

<div className="info col-6 p-2">
    
<form>
    <input className="changeCity"  type="text"  placeholder="Change City" autocomplete="off"/>
    <input className ="changeCitySubmit"type="submit" value="✈"/>
  </form>
  <button className="myLocation mb-3" > <i className="me-2 fa-solid fa-location-dot"></i>  My Location</button>

<h4 className="currentCity mb-0 text-center">Dubai</h4>
<Dateandtime/>  

<div className="currentTemperature">
    
    <div className='d-flex temperature mb-2 justify-content-center'>
        <div  className='temp'>28  </div>
        <div>
        <a href='/' className="celsii">°C/</a>
        <a href='/' className="farenheit">°F </a>
        </div>
    </div>
</div>
  



<div className="realFeelPrecipitationlWindHumidity">
    <ul className='p-2'> 
        <li > clear sky</li>
        <li >Feels Like - <span >28°</span>  </li>
        <li >Pressure - <span >660</span> hPa</li>
        <li >Wind - <span >9</span> km/hour</li>
        <li >Humidity - <span >60</span> %</li>
    </ul>
</div>
</div>

<div className='col-6 currentIcon'></div>

</div>
);}