import { useEffect, useState } from "react";
import { getDateTime } from "../../lib/data";

export function DateTime() {
  const { currentDate: date, currentTime: time } = getDateTime();
  setInterval(getDateTime, 1000);

  return (
    <section className="text-right text-xs">
      <p>{date}</p>
      <p>{time}</p>
    </section>
  );
}
