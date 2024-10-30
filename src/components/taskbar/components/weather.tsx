import { useEffect, useState } from "react";

import { Icons } from "../../../lib/icons";
import { getWeather } from "../../../lib/helper";

interface IWeather {
  temperature: number;
  weatherType: string;
}

export function Weather() {
  const [weather, setWeather] = useState<IWeather>({
    temperature: 0,
    weatherType: "",
  });

   useEffect(() => {
     (async () => {
       const data: any = await getWeather();
       setWeather(data);
     })();
   }, []);

  return (
    <section className="flex items-center gap-2 hover:bg-gray-400 py-1 px-2 rounded-[0.25rem]">
      <Icons.cloudRainy className="size-8" />
      <div className="flex flex-col">
        <span className="text-white text-xs">{weather.temperature} °C</span>
        <span className="text-white text-xs">{weather.weatherType}</span>
      </div>
    </section>
  );
}
