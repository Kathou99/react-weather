import React from "react";

import WeatherIcon from "./WeatherIcon";

function ForecastDay(props) {
  console.log(props)
  function forecastMax() {
    let tempMax = Math.round(props.data.temp.max);
    return `${tempMax}°`;
  }

  function forecastMin() {
    let tempMin = Math.round(props.data.temp.min);
    return `${tempMin}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="row mt-2">
        <div className="col-3">
          <p className="forecast-day">{day()}</p>
        </div>
        <div className="col-3">
          <WeatherIcon
            code={props.data.weather[0].icon}
            id="icon"
            className="w-100 justify-content-center py-1 forecast-icon"
          />
        </div>
        <div className="col-3">
          <p className="forecast-high">{forecastMax()}</p>
        </div>
        <div className="col-3">
          <p className="forecast-low">{forecastMin()}</p>
        </div>
      </div>
    </div>
  );
}

export default ForecastDay;