import { Icons } from "../../../../lib/icons";

export function Tab() {
  return (
    <section className="self-end flex items-center justify-between w-1/5 h-8 bg-slate-800 px-2 rounded-tl-[0.5rem] rounded-tr-[0.5rem]">
      <div className="flex items-center">
        <Icons.home className="size-5 mr-2" />
        <span className="text-sm font-bold">Home</span>
      </div>
      <Icons.effacer className="size-3 fill-white" /> 
    </section>
  );
}
