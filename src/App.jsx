import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Francisco" />
        <footer>
          This project was coded by{" "}
          <a href="https://gabrielle-b.netlify.app/" target="_blank">
            Gabby Beall{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/gabbybeall/weather-application-react"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
