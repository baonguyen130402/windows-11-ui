import { useState } from "react";

import clsx from "clsx";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../lib/components/ui/card";
import { Icons } from "../../lib/icons";
import { getDateTime } from "../../lib/helper";

export function Modal(props: any) {
  const { isOpen } = props;

  const myClassName = clsx(
    "transition-all fixed z-10 bottom-[58px] gap-y-2.5 grid grid-rows-3",
    {
      "-right-80 w-80": !isOpen,
      "right-2.5 w-80": isOpen,
    },
  );

  const textClassName = clsx(
    "transition duration-500",
    {
      "opacity-0": !isOpen,
      "text-[#f5f5f5] opacity-100 delay-300": isOpen,
    },
  );

  return (
    <div className={myClassName}>
      <Card className="border border-slate-600 backdrop-filter backdrop-blur-2xl bg-gray-800/80 h-[200px] row-span-2 text-slate-400">
        <CardHeader>
          <CardTitle>
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className={textClassName}>No new notifications</p>
        </CardContent>
      </Card>
      <Card className="border border-slate-600 backdrop-blur-2xl backdrop-filter bg-gray-800/80 text-slate-400">
        <CardHeader>
          <CardTitle>
            Something
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}

export function DateTime() {
  const { currentDate, currentTime } = getDateTime();
  const [open, setOpen] = useState(false);

  return (
    <section
      className="flex cursor-pointer items-center gap-x-2 py-1 px-2.5 hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem]"
      onClick={() => setOpen(!open)}
    >
      <Modal isOpen={open} />
      <div className="text-xs text-right">
        <p>{currentTime}</p>
        <p>{currentDate}</p>
      </div>
      <Icons.notification className="size-4" />
    </section>
  );
}
