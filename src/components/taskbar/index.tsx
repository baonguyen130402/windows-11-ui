import { DateTime } from "./dateTime";

export function Taskbar() {
  return (
    <section className="fixed bottom-0 left-0 p-2 backdrop-blur-2xl bg-[rgba(0,0,0,.45)] w-screen h-12 border-t border-slate-600">
      <DateTime />
    </section>
  );
}
