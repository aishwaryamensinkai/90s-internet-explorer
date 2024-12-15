import { useState, useEffect } from "react";
import Image from "next/image";
import { PixelBorder } from "./PixelBorder";

export function WeatherWidget() {
  const cities = [
    "New York",
    "London",
    "Tokyo",
    "Sydney",
    "Paris",
    "Mumbai",
    "Delhi",
    "Bangalore",
  ];
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [weather, setWeather] = useState({
    temperature: "",
    description: "",
  });

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`; // Changed to metric for Celsius

    async function fetchWeather() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeather({
          temperature: `${Math.round(data.main.temp)}°C`, // Displaying temperature in Celsius
          description: data.weather[0].description,
        });
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    }

    fetchWeather();
  }, [selectedCity]);

  return (
    <PixelBorder>
      <div className="bg-blue-100 p-4">
        <h3 className="text-lg font-bold mb-2">Weather Forecast</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`py-2 px-4 ${
                selectedCity === city ? "bg-blue-300" : "bg-blue-200"
              } rounded hover:bg-blue-400 focus:outline-none`}
            >
              {city}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold">{selectedCity}</p>
            <p>{weather.temperature}</p>
            <p>
              {weather.description.charAt(0).toUpperCase() +
                weather.description.slice(1)}
            </p>
          </div>
          <Image
            src="/weather-icon.gif"
            alt="Weather"
            width={64}
            height={64}
            priority
          />
        </div>
      </div>
    </PixelBorder>
  );
}
