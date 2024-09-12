import clsx from "clsx";
import { Icons } from "../../lib/icons";
import { useState } from "react";
import { Slider } from "../../lib/components/ui/slider";

export function Modal(props: any) {
  const { isOpen } = props;
  
  const buttons = [
    {
      icon: <Icons.wifi className="size-5" />,
      title: "Wifi",
    },
    {
      icon: <Icons.wifi className="size-5" />,
      title: "Wifi",
    },
    {
      icon: <Icons.wifi className="size-5" />,
      title: "Wifi",
    },
    {
      icon: <Icons.wifi className="size-5" />,
      title: "Wifi",
    },
    {
      icon: <Icons.wifi className="size-5" />,
      title: "Wifi",
    },
  ];

  const myClassName = clsx(
    "transition-all fixed border border-slate-600 bg-gray-900 h-80 text-slate-400 rounded-[0.5rem] p-4",
    {
      "right-2.5 w-[22rem] -bottom-80": !isOpen,
      "right-2.5 w-[22rem] bottom-[58px]": isOpen,
    },
  );

  return (
    <div className={myClassName}>
      <div className="grid grid-cols-3 grid-rows-2 gap-3">
        {buttons.map((button) => (
          <div className="text-center group w-full">
            <div className="bg-gray-700 w-[6.1rem] h-12 border border-gray-500 rounded-[0.25rem] flex items-center justify-center group-hover:bg-gray-600">
              {button.icon}
            </div>
            <span className="tracking-wider text-sm">{button.title}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Icons.speaker className="size-4"/>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-full"
        />
      </div>
      <iframe src="https://www.youtube.com" width="100%" height="560"></iframe>
    </div>
  );
}

export function SystemIcons() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="flex items-center gap-x-2.5 hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] p-2.5"
        onClick={() => setOpen(!open)}
      >
        <Icons.wifi className="size-4" />
        <Icons.speaker className="size-4" />
        <Icons.battery className="size-5" />
      </section>
      <Modal isOpen={open} />
    </>
  );
}
