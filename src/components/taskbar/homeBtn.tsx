import { useState } from "react";

import clsx from "clsx";
import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

import {
  appsInStartMenu,
  appsRecentOpennedInStartMenu,
} from "../../lib/data/taskbar";
import { Icons } from "../../lib/icons";
import { Input } from "../../lib/components/ui/input";

export function StartMenu(props: any) {
  const { isOpen } = props;

  const [parent, apps] = useDragAndDrop<HTMLUListElement, any>(
    appsInStartMenu,
    { plugins: [animations()] },
  );

  const myClassName = clsx(
    "z-50 bg-neutral-800 absolute font-white grid duration-200 w-[40em] rounded-[1em] overflow-hidden ease-in-out border-[2px] border-[#373737] backdrop-blur-xl",
    {
      "bottom-[60px] left-[550px]": isOpen,
      "-bottom-[800px] left-[550px]": !isOpen,
    },
  );

  return (
    <section className={myClassName}>
      <div className="p-[2em] pb-0 flex items-center relative">
        <Input
          type="text"
          className="focus:outline-none rounded-full border-[#333] bg-[#202020] pl-10"
          placeholder="Search for apps, settings, and documents"
        />
        <Icons.search className="size-4 absolute left-12" />
      </div>
      <div className="px-[2em] pb-[1em]">
        <div className="mt-8 px-8">
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-sm">Pinned</span>
            <div className="flex items-center gap-1 bg-[#363636] py-[0.2em] pr-[0.2em] pl-[0.5em] rounded-[0.5em] duration-200 hover:bg-[rgba(255,255,255,.2)]">
              <span className="text-sm font-semibold">All apps</span>
              <Icons.chevronRight className="size-4 fill-transparent" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <ul ref={parent} className="grid grid-cols-6 w-full gap-[0.5em]">
              {apps.map((app) => (
                <li
                  key={app.title}
                  className="flex flex-col items-center justify-center gap-[0.2em] cursor-pointer w-[78px] h-[78px] hover:bg-[#373737] duration-100 rounded-[0.3em]"
                >
                  {app.icon}
                  <span className="text-xs font-lighter text-center">
                    {app.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 px-8">
          <div className="flex items-center justify-between">
            <span className="text-sm font-extrabold">Recommended</span>
            <div className="flex items-center gap-1 bg-[#363636] py-[0.2em] pr-[0.2em] pl-[0.5em] rounded-[0.5em] duration-200 hover:bg-[rgba(255,255,255,.2)] group">
              <span className="text-sm font-semibold">More</span>
              <Icons.chevronRight className="size-4 fill-transparent" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <ul className="grid grid-cols-2 gap-[1em] w-full">
              {appsRecentOpennedInStartMenu.map((app, key) => (
                <li
                  key={key}
                  className="flex items-center gap-[1em] p-[0.5em] rounded-[0.3em] duration-100 hover:bg-[#373737] cursor-pointer"
                >
                  {app.icon}
                  <div className="flex flex-col">
                    <span className="text-xs">{app.title}</span>
                    <span className="text-xs text-[#7c7d7f]">{app.state}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full h-[4em] bg-black p-[2em]">
        <div className="px-8 flex items-center justify-between w-full">
          <div className="flex items-center gap-[0.5em] p-[0.5em] rounded-[0.3em] hover:bg-[#373737]">
            <img
              src="https://ipwatchdog.com/wp-content/uploads/2018/03/pepe-the-frog-1272162_640.jpg"
              className="size-8 rounded-full"
            />
            <span className="text-xs">baonguyexn</span>
          </div>
          <div className="flex items-center gap-[0.5em] p-[0.5em] rounded-[0.3em] hover:bg-[#373737]">
            <Icons.power className="size-8 fill-white" />
          </div>
        </div>
      </div>
      <div className="spegni-pc-start-section">
      </div>
    </section>
  );
}

export function HomeBtn() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] bg-transparent flex items-center justify-center hover:w-10 hover:h-10 w-10 h-10 p-1"
        onClick={() => setOpen(!open)}
      >
        <Icons.windows className="size-7 group-hover:hidden" />
        <Icons.windowsHover className="size-7 hidden group-hover:block" />
      </div>
      <StartMenu isOpen={open} />
    </>
  );
}
