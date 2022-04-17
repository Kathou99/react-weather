/* import React, { useEffect } from "react";
import "./Search.css";
import CurrentLocationButton from "./CurrentLocationButton";
import { apiKey, units } from "./constants";
import axios from "axios";

export default function Search({ updateFunction }) {
  function handleWeatherResponse(props, locationData) {
    updateFunction(props.data, locationData);
  }

  function searchCity(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}`;
    let lat;
    let lon;
    axios.get(`${apiUrl}&appid=${apiKey}`).then((props) => {
      lat = props.data.coord.lat;
      lon = props.data.coord.lon;
      let locationData = {
        country: props.data.sys.country,
        name: props.data.name,
      };
      apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}`;
      axios
        .get(`${apiUrl}&appid=${apiKey}`)
        .then((props) => handleWeatherResponse(props, locationData));
    });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => searchCity("Montréal"), []);

  function handleSearch(event) {
    event.preventDefault();
    let input = document.querySelector("#city-input");
    searchCity(input.value);
  }

  return (
    <div className="Search">
      <form className="search-bar" id="search-bar" onSubmit={handleSearch}>
        <div className="row align-items-center">
          <div className="col-6 md-8">
            <input
              type="text"
              className="text-input"
              id="city-input"
              placeholder="Enter a city..."
              autoComplete="off"
            />
          </div>
          <div className="col">
            <input
              type="submit"
              className="btn btn-primary submit-btn"
              label="Search"
              value="Search"
            />
          </div>
          <div className="col">
            <CurrentLocationButton
              handleWeatherResponse={handleWeatherResponse}
            />
          </div>
        </div>
      </form>
    </div>
  );
} */

import React from "react";
import { useState } from "react";
import axios from "axios";

import WeatherToday from "./WeatherToday";
import Forecast from "./Forecast";
import Music from "./Music";

function Search(props) {
  console.log(props)
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [location, setLocation] = useState(props.defaultLocation);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      temperatureLow: Math.round(response.data.main.temp_min),
      temperatureHigh: Math.round(response.data.main.temp_max),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      pressure: Math.round(response.data.main.pressure),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    processSearch();
  }

  function handleLocation(event) {
    setLocation(event.target.value);
  }

  function processSearch() {
    const unitAPI = `metric`;
    const keyAPI = `7847c8cdbdd3f4d4e829321a937f5c42`;
    const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${keyAPI}&units=${unitAPI}`;
    axios.get(urlAPI).then(handleResponse);
  }

  function findLocation(position) {
    const apiKey = "0096e74278950fd9325fbc33e0f38fed";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(findLocation);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form id="find-city-form" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              autoFocus="on"
              onChange={handleLocation}
              className="form-control"
              placeholder="Enter a city (e.g. Montreal)"
              id="find-input"
            />
            <button
              className="btn btn-outline-warning search-button"
              type="submit"
            >
              <i className="fas fa-search"></i>
            </button>
            <button
              className="btn btn-outline-warning location-button"
              type="button"
              onClick={getCurrentLocation}
            >
              <i class="fas fa-location-arrow"></i>
            </button>
          </div>
        </form>

        <div className="row">
          <div className="col-sm-8">
            <WeatherToday data={weatherData} />
          </div>

          <div className="col-sm-4">
            <Forecast coordinates={weatherData.coordinates} />
            <br />
            <Music />
          </div>
        </div>
      </div>
    );
  } else {
    processSearch();
    return <div className="text-warning">Loading...</div>;
  }
}

export default Search;
