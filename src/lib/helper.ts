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

export function separateDesktopLayout(
  icons: any = [{ title: "", icon: "" }],
  row: number = 9,
  column: number = 18,
) {
  const { title, icon } = icons;

  const desktopLayout = Array
    .from(Array(row), () =>
      new Array(column)
        .fill({ icon: "", title: "" }));

  if (title !== "" && icon !== "") {
    icons.forEach((icon: any, id: number) => {
      desktopLayout[id][0] = icon
    })
  }

  return desktopLayout;
}
