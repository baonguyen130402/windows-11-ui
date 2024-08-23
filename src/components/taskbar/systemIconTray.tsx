import clsx from "clsx";
import { Icons } from "../../lib/icons";
import { useState } from "react";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";

export function Modal(props: any) {
  const { isOpen } = props;

  const trayIcons = [
    <Icons.wifi className="size-4" />,
    <Icons.speaker className="size-4" />,
    <Icons.battery className="size-4" />,
    <Icons.speaker className="size-4" />,
    <Icons.wifi className="size-4" />,
    <Icons.battery className="size-4" />,
  ];

  const [parent, icons] = useDragAndDrop<HTMLUListElement, any>(
    trayIcons,
    { plugins: [animations()] },
  );

  const myClassName = clsx(
    "w-28 h-28 fixed transition-all duration-300 border-slate-600 backdrop-filter backdrop-blur-2xl bg-gray-800/80 text-slate-400 rounded-[0.25rem] p-2 grid grid-cols-3 grid-rows-3 gap-2 animate-slide",
    {
      "-top-32": isOpen,
      "top-32": !isOpen,
    },
  );

  return (
    <ul className={myClassName} ref={parent}>
      {icons.map((icon: any, id: number) => (
        <li key={id} className="hover:bg-slate-600/40 justify-self-center p-1 rounded-[0.25rem]">
          {icon}
        </li>
      ))}
    </ul>
  );
}

export function SystemIconTray() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] py-3.5 px-2.5 group relative flex justify-center"
      onClick={() => setOpen(!open)}
    >
      <Modal isOpen={open} />
      {!open && (
        <p className="fixed -top-11 hidden group-hover:block group-hover:animate-fade delay-700 bg-[#1b1f1f] rounded-[0.25rem] p-2 text-xs">
          Show hidden icons
        </p>
      )}
      <Icons.lineAngleUp
        className={clsx("size-3", {
          "rotate-180 duration-300": open,
          "duration-300": !open,
        })}
      />
    </div>
  );
}
