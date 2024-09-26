import clsx from "clsx";

import { Taskbar } from "./taskbar";
import { Desktop } from "./desktop";
import Wallpaper from "../assets/wallpaper.jpg";
import { genarateBrightnessUnit } from "../lib/utilities/brightness";

export function MainLayout() {
  const className = clsx(
    "w-screen h-screen bg-fixed bg-cover p-0 m-0 overflow-hidden",
    genarateBrightnessUnit(),
  );

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
