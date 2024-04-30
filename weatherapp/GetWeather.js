import React, { useState } from 'react';
import axios from 'axios';

const GetWeather = () => {
    const [weatherdata, setweatherdata] = useState(null);
    const [zipcode, setzipcode] = useState('');

    const apikey = "a8487da773965655af255a51e129824c";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric";
    const fetchWeatherData = async () => {
    };
    
    return(
        <div>
            <h1>City Weather Finder</h1>
            <form>
                <h4>Enter the zipcode of your city to see its tempurature and other weather statistics:</h4>
                <input type="text" placeholder="Zip code here" />
                <button type="submit">Search</button>
            </form>
            <tr>
                <th>City Name:</th>
                <td></td>
            </tr>
            <tr>
                <th>Tempurature in Celsius:</th>
                <td></td>
            </tr>
            <tr>
                <th>Weather Stats:</th>
                <td></td>
            </tr>
      </div>
    );
};
export default GetWeather;