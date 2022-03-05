
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from 'react';
import "./main.css";
import pic from "./img/b.webp";
import { fetchweather }from "./api/a";
import Example from "./api/a";
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from "reactstrap"
import Radium, { StyleRoot } from 'radium';
const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoading, setLoading] = useState(false);
  const search = async (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      const data = await fetchweather(query);
      setLoading(false);
      setWeather(data);
      setQuery("");
    }
    
  };
  
 let show;
   show=  (
    <div class="row">
    <div class="col-sm-6">
   <div className="main-container">
   <input
     type="text"
     className="search"
     placeholder="Enter the city name"
     value={query}
     onChange={(event) => setQuery(event.target.value)}
     onKeyPress={search}
   />
   {weather.main && (
     <div className="city">
         <h2 className="city-name">
           <k>THE WEATHER APP</k><br></br>
         </h2>
         <div className="city-temp">
           {Math.round(weather.main.temp)}
           <sup>&deg;C</sup>
         </div>
         <div className="info">
           {/* <img
             className="city-icon"
             src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
             alt={weather.weather[0].description}
           /> */}
           <p>{weather.weather[0].description} </p>
           <h2><center><span>{weather.name}</span></center></h2>
           
         </div>
       </div>  
   )}
 </div>
 </div>
 <div class="col-sm-6">
   <div class="image">
     <img src= {pic} alt="img" style={{ width: "70%",padding:"10px"}}/>
     </div>
     </div>
   </div>
   );
 
   return(<>{isLoading ?( <div>
    <center><Spinner type="border" style={{ width: '2rem', height: '2rem'}}
        children={false} /></center>
</div>):(show) } </>)

};
export default App;
