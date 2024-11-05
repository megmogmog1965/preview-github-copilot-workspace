import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      // Mocking the API response
      const data = {
        location: {
          name: "Tokyo",
          region: "",
          country: "Japan",
        },
        current: {
          temp_c: 25,
          condition: {
            text: "Sunny",
          },
        },
      };
      setWeather(data);
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Today's Weather in Tokyo</h2>
      <p>Temperature: {weather.current.temp_c}°C</p>
      <p>Condition: {weather.current.condition.text}</p>
    </div>
  );
};

export default Weather;
