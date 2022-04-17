import React from "react";

import ClearSkyDay from "./icons/01d.svg";
import ClearSkyNight from "./icons/01n.svg";
import FewCloudsDay from "./icons/02d.svg";
import FewCloudsNight from "./icons/02n.svg";
import ScatteredCloudsDay from "./icons/03d.svg";
import ScatteredCloudsNight from "./icons/03n.svg";
import BrokenCloudsDay from "./icons/04d.svg";
import BrokenCloudsNight from "./icons/04n.svg";
import ShowerDay from "./icons/09d.svg";
import ShowerNight from "./icons/09n.svg";
import RainDay from "./icons/10d.svg";
import RainNight from "./icons/10n.svg";
import Thunderstorm from "./icons/11d.svg";
import Snow from "./icons/13d.svg";
import Mist from "./icons/50d.svg";

function WeatherIcon({ code, alt }) {
  const codeMapping = {
    "01d": ClearSkyDay,
    "01n": ClearSkyNight,
    "02d": FewCloudsDay,
    "02n": FewCloudsNight,
    "03d": ScatteredCloudsDay,
    "03n": ScatteredCloudsNight,
    "04d": BrokenCloudsDay,
    "04n": BrokenCloudsNight,
    "09d": ShowerDay,
    "09n": ShowerNight,
    "10d": RainDay,
    "10n": RainNight,
    "11d": Thunderstorm,
    "11n": Thunderstorm,
    "13d": Snow,
    "13n": Snow,
    "50d": Mist,
    "50n": Mist,
  };

  return <img className="Icon" src={codeMapping[code]} alt={alt} />;
}

export default WeatherIcon;