import React from "react";

function Footer() {
  return (
    <div id="footer">
      <p className="coded-by text-middle mt-5">
        This app was created by {""}
        <a
          href="https://kathouqccode.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="clickthru-links"
        >
          Katherine St-Amand ©
        </a>
        , as part of her{" "}
        <a
          href="https://www.shecodes.io/react"
          target="_blank"
          rel="noopener noreferrer"
          className="clickthru-links"
        >
          SheCodes React
        </a>{" "} 
        final projects.
        <br />
        Open-sourced on {""}
        <a
          href="https://github.com/Kathou99/react-weather/tree/v3"
          target="_blank"
          rel="noopener noreferrer"
          className="clickthru-links"
        >
          GitHub
        </a>{" "}
        {""}| Hosted on {""}
        <a
          href="https://www.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="clickthru-links"
        >
          Netlify
        </a>{" "}
        {""}| Weather icons by {""}
        <a
          href="https://basmilius.github.io/weather-icons/index-line.html"
          target="_blank"
          rel="noopener noreferrer"
          className="clickthru-links"
        >
          Basmilius
        </a>
      </p>
    </div>
  );
}

export default Footer;
