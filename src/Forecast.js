import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

import ForecastDay from "./WeatherForecastDay";

function Forecasts(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function processForecast() {
    console.log(props)
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    const unitAPI = `metric`;
    const keyAPI = `b234ec4305478a96889b3ecb891640e3`;
    const urlAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${keyAPI}&units=${unitAPI}`;
    axios.get(urlAPI).then(handleResponse);
  }

  if (loaded) {
    return (
      <div id className="weather-forecast px-2 mt-2" >
        <p className="subtitle fs-5">
          7 Days <strong>FORECAST:</strong>
        </p>

        <div className="forecast-days container-fluid" id="forecast">
          <div className="divider mt-4 mb-4" id="forecastdays"></div>
          <div >
            <ForecastDay data={forecastData[1]} />
            <ForecastDay data={forecastData[2]} />
            <ForecastDay data={forecastData[3]} />
            <ForecastDay data={forecastData[4]} />
            <ForecastDay data={forecastData[5]} />
            <ForecastDay data={forecastData[6]} />
            <ForecastDay data={forecastData[7]} />
          </div>
        </div>
      </div>
    );
  } else {
    processForecast();
    return <div className="text-warning">Loading...</div>;
  }
}

export default Forecasts;