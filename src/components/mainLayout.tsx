import { useContext } from "react";

import { Taskbar } from "./taskbar";
import { Desktop } from "./desktop";
import Wallpaper from "../assets/wallpaper.jpg";
import { BrightnessContext } from "../lib/contexts/BrightnessContext";

export function MainLayout() {
  const { brightness } = useContext(BrightnessContext);
  const className =
    `filter brightness-${brightness} w-screen h-screen bg-fixed bg-cover p-0 m-0`;

  return (
    <main
      className={className}
      style={{ backgroundImage: `url(${Wallpaper})` }}
    >
      <Desktop />
      <Taskbar />
    </main>
  );
}
