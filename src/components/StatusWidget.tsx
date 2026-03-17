"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./StatusWidget.module.css";

type WeatherData = {
  temperature: number | null;
  weatherIcon: string;
  weatherLabel: string;
  location: string;
};

type WeatherIconInfo = {
  icon: string;
  label: string;
};

function formatTime(now: Date): string {
  const time = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  const tzPart = new Intl.DateTimeFormat("en-US", {
    timeZoneName: "short",
  })
    .formatToParts(now)
    .find((part) => part.type === "timeZoneName")?.value;

  return tzPart ? `${time} ${tzPart}` : time;
}

function weatherCodeToIconInfo(code: number | null, isDay: boolean): WeatherIconInfo {
  if (code === null) {
    return { icon: "-", label: "Weather unavailable" };
  }
  
  if (code === 0) {
    return { icon: isDay ? "\u2600" : "\u263E", label: "Clear" };
  }
  if (code === 1 || code === 2) {
    return { icon: isDay ? "\u26C5" : "\u263E", label: "Partly cloudy" };
  }
  if (code === 3) {
    return { icon: "\u2601", label: "Overcast" };
  }
  if (code === 45 || code === 48) {
    return { icon: "\u2248", label: "Fog" };
  }
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return { icon: "\u2614", label: "Rain" };
  }
  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return { icon: "\u2744", label: "Snow" };
  }
  if (code === 95 || code === 96 || code === 99) {
    return { icon: "\u26A1", label: "Thunderstorm" };
  }

  return { icon: "-", label: "Unknown" };
}

export default function StatusWidget() {
  const ATLANTA_LAT = 33.749;
  const ATLANTA_LON = -84.388;

  const [now, setNow] = useState(() => new Date());
  const [weatherData, setWeatherData] = useState<WeatherData>({
    temperature: null,
    weatherIcon: "...",
    weatherLabel: "Loading weather",
    location: "Atlanta, GA",
  });

  useEffect(() => {
    const timer = globalThis.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => globalThis.clearInterval(timer);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadWeather() {
      try {
        const weatherResp = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${ATLANTA_LAT}&longitude=${ATLANTA_LON}&current=temperature_2m,weather_code,is_day&temperature_unit=fahrenheit`
        );
        const weatherJson = weatherResp.ok ? await weatherResp.json() : null;

        const temp =
          typeof weatherJson?.current?.temperature_2m === "number"
            ? Math.round(weatherJson.current.temperature_2m)
            : null;
        const weatherCode =
          typeof weatherJson?.current?.weather_code === "number"
            ? weatherJson.current.weather_code
            : null;
        const isDay = weatherJson?.current?.is_day === 1;
        const weatherInfo = weatherCodeToIconInfo(weatherCode, isDay);

        if (!cancelled) {
          setWeatherData({
            temperature: temp,
            weatherIcon: weatherInfo.icon,
            weatherLabel: weatherInfo.label,
            location: "Atlanta, GA",
          });
        }
      } catch {
        if (!cancelled) {
          setWeatherData({
            temperature: null,
            weatherIcon: "-",
            weatherLabel: "Weather unavailable",
            location: "Atlanta, GA",
          });
        }
      }
    }

    loadWeather();
    const refresh = globalThis.setInterval(loadWeather, 10 * 60 * 1000);

    return () => {
      cancelled = true;
      globalThis.clearInterval(refresh);
    };
  }, []);

  const timeText = useMemo(() => formatTime(now), [now]);
  const tempText = weatherData.temperature === null ? "--°F" : `${weatherData.temperature}°F`;

  return (
    <div className={styles.widget} aria-live="polite">
      <span>{timeText}</span>
      <span>•</span>
      <span>{tempText}</span>
      <span aria-label={weatherData.weatherLabel} title={weatherData.weatherLabel}>
        {weatherData.weatherIcon}
      </span>
      <span>•</span>
      <span>{weatherData.location}</span>
    </div>
  );
}
