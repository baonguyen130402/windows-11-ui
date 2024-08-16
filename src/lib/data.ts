import { useState } from "react";

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
