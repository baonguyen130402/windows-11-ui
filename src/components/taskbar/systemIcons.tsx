import clsx from "clsx";
import { Icons } from "../../lib/icons";
import { Card, CardHeader, CardTitle } from "../../lib/components/ui/card";
import { useState } from "react";

export function Modal(props: any) {
  const { isOpen } = props;

  const myClassName = clsx(
    "transition-all fixed border border-slate-600 backdrop-filter backdrop-blur-2xl bg-gray-800/80 h-[200px] text-slate-400",
    {
      "right-2.5 w-80 -bottom-52": !isOpen,
      "right-2.5 w-80 bottom-[58px]": isOpen,
    },
  );

  return (
    <Card className={myClassName}>
      <CardHeader>
        <CardTitle>
          Notifications
        </CardTitle>
      </CardHeader>
    </Card>
  );
}

export function SystemIcons() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="flex items-center gap-x-2.5 hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] p-2.5"
      onClick={() => setOpen(!open)}
    >
      <Modal isOpen={open} />
      <Icons.wifi className="size-4" />
      <Icons.speaker className="size-4" />
      <Icons.battery className="size-5" />
    </section>
  );
}
