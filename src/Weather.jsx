import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>San Francisco</h1>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
            alt="Partly Sunny"
          />
          62°F
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 74%</li>
            <li>Wind: 13 mph</li>
          </ul>
        </div>
        <div className="col-6">
          Weather
          <ul>
            <li>Saturday 1:00 PM</li>
            <li>Partly Sunny</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
