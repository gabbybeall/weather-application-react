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
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>San Francisco</h1>
      <ul>
        <li>Saturday 1:00 PM</li>
        <li>Partly Sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
            alt="Partly Sunny"
          />
          <span className="temperature">62</span>
          <span className="unit">°F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 74%</li>
            <li>Wind: 13 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
