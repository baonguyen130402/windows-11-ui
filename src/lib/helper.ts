import { useState } from "react";
import axios from "axios";
import { generateKey } from "crypto";

export function getDateTime() {
  const newDate = new Date().toLocaleDateString();
  const newTime = new Date().toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "numeric",
  });
  const [currentTime, setCurrenTime] = useState(newTime);
  const [currentDate, setCurrenDate] = useState(newDate);

  function updateTime() {
    const newDate = new Date().toLocaleDateString();
    const newTime = new Date().toLocaleTimeString("en-us", {
      hour: "numeric",
      minute: "numeric",
    });

    setCurrenTime(newTime);
    setCurrenDate(newDate);
  }

  setInterval(updateTime, 1000);

  return { currentTime, currentDate };
}

export function separateDesktopLayout(
  icons: any = [{ title: "", icon: "" }],
  row: number = 9,
  column: number = 18,
) {
  const { title, icon } = icons;

  function generateId(a: number) {
    return (a * Date.now()).toString(36) +
      Math.random().toString(36);
  }

  const desktopLayout = Array
    .from(Array(row), () =>
      new Array(column)
        .fill({ id: 0, icon: "", title: "" }));

  console.log(desktopLayout);

  if (title !== "" && icon !== "") {
    icons.forEach((icon: any, id: number) => {
      desktopLayout[id][0] = icon;
    });
  }

  return desktopLayout;
}

export async function getWeather() {
  const HCMC = {
    latitude: 10.82,
    longtitude: 106.62,
  };

  const { data: weather } = await axios.get(
    `https://api.weatherbit.io/v2.0/current?lat=${HCMC.latitude}&lon=${HCMC.longtitude}&key=${import.meta.env.VITE_WEATHER_API_KEY}`,
  );

  const { temp: temperature } = weather.data[0];
  const { description: weatherType } = weather.data[0].weather;

  return {
    temperature,
    weatherType,
  };
}
