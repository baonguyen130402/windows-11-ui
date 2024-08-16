import { useEffect, useState } from "react";
import { getDateTime } from "../../lib/data";

export function DateTime() {
  const { currentDate, currentTime } = getDateTime();

  return (
    <section className="text-xs">
      <p>{currentTime}</p>
      <p>{currentDate}</p>
    </section>
  );
}
