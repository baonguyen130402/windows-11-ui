import { Icons } from "../../../../lib/icons";

export function Tab() {
  return (
    <section className="flex items-center justify-between w-full h-8 bg-gray-700/40 px-2 rounded-[0.25rem]">
      <div className="flex items-center">
        <Icons.firefox className="size-5 mr-2" />
        <span className="text-sm font-bold">New tab</span>
      </div>
      <Icons.effacer className="size-3 fill-white" /> 
    </section>
  );
}
