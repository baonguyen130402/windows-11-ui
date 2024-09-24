import { Taskbar } from "./taskbar";
import Wallpaper from "../assets/wallpaper.jpg";
import { Desktop } from "./desktop";
import { useContext } from "react";
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
