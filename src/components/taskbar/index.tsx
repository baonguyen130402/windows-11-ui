import { AppsPin } from "./appsPin";
import { DateTime } from "./dateTime";
import { Notification } from "./notification";
import { SystemIcons } from "./systemIcons";

export function Taskbar() {
  return (
    <section className="grid grid-cols-4 gap-x-2 items-center fixed bottom-0 left-0 p-2 backdrop-blur-2xl bg-[rgba(0,0,0,.45)] w-screen h-12 border-t border-slate-600">
      <div className="justify-self-center col-start-2 col-span-2">
        <AppsPin />
      </div>
      <div className="flex items-center justify-self-end col-start-4 gap-x-2">
        <SystemIcons />
        <DateTime />
        <Notification />
      </div>
    </section>
  );
}
