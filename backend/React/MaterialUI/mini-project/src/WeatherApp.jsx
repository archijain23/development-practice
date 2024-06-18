import SearchBox from "./searchbox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.05,
    weather: "haze",
    temp: 42.62,
  });

  let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather app by Delta</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
