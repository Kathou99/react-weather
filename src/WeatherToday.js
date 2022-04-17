import React from "react";
import Timestamp from "./Timestamp";
 import CountryName from "./CountryName";
import WeatherIcon from "./WeatherIcon";
import WeatherInfo from "./WeatherInformation";

function WeatherToday(props) {
  return (
    <div className="weather-today py-4 px-2 mt-2">
      <div className="container-fluid">
        <div className="row">
          <p className="subtitle text-middle mt-2 mb-4 fs-2">
            Here's the <strong>CURRENT WEATHER:</strong>
          </p>
        </div>

        <div className="divider mb-3"></div>

        <div className="row text-start mt-4">
          <div className="col-6">
            <h3 className="current-country">
              <CountryName country={props.data.country} />
            </h3>
          </div> 

          <div className="col-6">
            <p className="current-date mt-2 text-end">
              <Timestamp date={props.data.date} />
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h2 className="current-city text-start text-uppercase">
              {props.data.city}
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-4 justify-content-center mt-4">
            <div className="row">
              <WeatherIcon
                code={props.data.icon}
                className="w-100"
                id="weather-icon"
              />
            </div>
            <div className="row mt-3">
              <p className="current-condition">{props.data.description}</p>
            </div>
          </div>

          <div className="col-8">
            <WeatherInfo
              celsius={props.data.temperature}
              feel={props.data.feelsLike}
              low={props.data.temperatureLow}
              high={props.data.temperatureHigh}
              humidity={props.data.humidity}
              wind={props.data.wind}
              pressure={props.data.pressure}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherToday;