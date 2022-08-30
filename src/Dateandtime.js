import './dateandtime.css';
import React from 'react';

export default function Dateandtime(){
return(
    <div>
<div className="dateAndTime d-flex justify-content-center">
<h5 className="currentTime pe-2" >20:00</h5>
<h5 className="currentDay pe-2" >Sat</h5>
<h5 className="currentDate" >08/06</h5>
</div></div>
);
}