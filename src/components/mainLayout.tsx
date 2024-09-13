import { Taskbar } from "./taskbar";
import Wallpaper from "../assets/wallpaper.jpg";
import { Desktop } from "./desktop";
import { useContext } from "react";
import { BrightnessContext } from "../lib/contexts/BrightnessContext";

export function MainLayout() {
  const { brightness } = useContext(BrightnessContext);
  console.log(brightness);

  return (
    <main
      className="relative w-screen h-screen bg-fixed bg-cover p-0 m-0"
      style={{ backgroundImage: `url(${Wallpaper})` }}
    >
      <div className="absolute bg-black" style={{ opacity: brightness / 100 }}>
        <Desktop />
        <Taskbar />
      </div>
    </main>
  );
}
