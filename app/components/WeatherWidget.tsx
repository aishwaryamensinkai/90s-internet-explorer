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
  const [weather, setWeather] = useState({ temperature: "", description: "", humidity: "", wind: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    if (!apiKey) {
      setError("Weather API key is not configured.");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric`;
    async function fetchWeather() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod !== 200) {
          throw new Error(data.message);
        }
        setWeather({
          temperature: `${Math.round(data.main.temp)}°C`,
          description: data.weather[0].description,
          humidity: data.main.humidity + "%",
          wind: data.wind.speed + " m/s",
        });
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError("Failed to fetch weather data: " + error.message);
        } else {
          setError("Failed to fetch weather data.");
        }
      } finally {
        setLoading(false);
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
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">{selectedCity}</p>
              <p>{weather.temperature}</p>
              <p>
                {weather.description.charAt(0).toUpperCase() +
                  weather.description.slice(1)}
              </p>
              <p>Humidity: {weather.humidity}</p>
              <p>Wind: {weather.wind}</p>
            </div>
            <Image
              src="/weather-icon.gif"
              alt="Weather"
              width={64}
              height={64}
              priority
            />
          </div>
        )}
      </div>
    </PixelBorder>
  );
}
