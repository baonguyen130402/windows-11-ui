import { AppsPin } from "./appsPin";
import { DateTime } from "./dateTime";
import { HomeBtn } from "./homeBtn";
import { SearchBtn } from "./searchBtn";
import { SystemIcons } from "./systemIcons";

export function Taskbar() {
  return (
    <section className="z-10 grid grid-cols-4 gap-x-2 items-center fixed bottom-0 left-0 py-0.5 px-2.5 backdrop-blur-2xl bg-[rgba(0,0,0,.45)] w-screen h-12 border-t border-slate-600">
      <div className="flex items-center justify-self-center col-start-2 col-span-2 gap-x-1">
        <HomeBtn />
        <SearchBtn />
        <AppsPin />
      </div>
      <div className="flex items-center justify-self-end col-start-4">
        <SystemIcons />
        <DateTime />
      </div>
    </section>
  );
}
