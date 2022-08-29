import './weather.css';
import React from 'react';

export default function Weather(){
return(
    
    <div className="row weatherblock" >
<div className="col-6">
  <form>
  <input className="changeCity"  type="text"  placeholder="Change City" autocomplete="off"/>
 <input className ="changeCitySubmit"type="submit" value="✈"/>
  </form>
<button className="myLocation" >  My Location <i className="fa-solid fa-location-dot"></i></button>
  <div className="realFeelPrecipitationlWindHumidity">

    <ul> 
      <li className="realFeel"  >Feels Like - <span >28°</span>  </li>
      <li className="pressure">Pressure - <span >660</span> hPa</li>
      <li className="wind">Wind - <span >9</span> km/hour</li>
      <li className="humidity">Humidity - <span >60</span> %</li></ul></div>
      
</div>


        <div className="col-6 text-center">
 <div className="currentWeather">
 <h4 className="currentCity">Dubai</h4>

<div>
    <h5 className="week">Sat</h5>
    <h5 className="currentDate" >08/06</h5>
    <h5 className="currentTime" >20:00</h5></div>
</div>


<div className="currentIcon" ><i  className="fa-solid fa-cloud-bolt"></i></div>
 <div className="currentTemperature d-flex justify-content-center">
      <div >28 </div>
      <div >
        <span  className="celsii">°C/</span>
        <span className="farenheit"  href="">°F </span> </div>
</div>
      </div>
    <div className="dateAndTime">  
    
    <div className="weatherdescription">clear sky</div>
    
</div></div>




)

}