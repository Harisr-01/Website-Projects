import React, { useState } from 'react';
import axios from 'axios';
import './GetWeather.css';
const GetWeather = () => {
    const [weatherdata, setweatherdata] = useState(null);
    const [zipcode, setzipcode] = useState('');

    const apikey = "a8487da773965655af255a51e129824c";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${apikey}&units=metric`;
    const fetchweatherdata = async () => {
        try {
            const response = await axios.get(apiurl);
            setweatherdata(response.data);
        }
        catch (error) {
            console.log('Error fetching that data:', error);
        }
    
    };
    const handleinputchange = (event) => {
        setzipcode(event.target.value);
    };
    const handlesubmit = (event) => {
        event.preventDefault();
        fetchweatherdata();    
    };
    
    return(
        <div>
            <div id="header">
                <h1>City Weather Finder</h1>
            </div>
            <br></br>
            <form onSubmit={handlesubmit}>
                <h4 id="instructions">Enter the zipcode of your city to see its tempurature and weather statistics:</h4>
                <div id="zipcodeinput">
                    <input type="text" placeholder="Zip code here" value={zipcode} onChange={handleinputchange} id="searchbox"/>
                    <button type="submit" id="button">Search</button>
                </div>
            </form>
            <br></br>
            {weatherdata && (
                <table>
                    <tr id="cityname">
                        <th>Weather and Tempurature in: </th>
                        <th>{weatherdata.name}</th>
                    </tr>
                    <tr>
                        <td><strong>Tempurature in Celsius:</strong></td>
                        <td>{weatherdata.main.temp}</td>
                    </tr>
                    <tr>
                        <td><strong>Weather Stats:</strong></td>
                        <td>{weatherdata.weather[0].description}</td>
                    </tr>
                </table>
            )}    
      </div>
    );
};
export default GetWeather;