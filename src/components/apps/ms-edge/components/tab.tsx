import { Icons } from "../../../../lib/icons";

export function Tab() {
  return (
    <div className="relative w-full">
      <section className="flex items-center justify-between w-full h-10 bg-[#3b3b3b] px-2 rounded-[0.25rem] rounded-bl-[0] rounded-br-[0] after:absolute after:w-5 after:h-5 after:-bottom-[0.3px] after:-right-[19.7px] after:bg-transparent after:rounded-full after:shadow-[-6.5px_6.5px_0_#3b3b3b] before:absolute before:w-4 before:h-4 before:-bottom-[0.3px] before:-left-[16.7px] before:rounded-full before:shadow-[6.5px_6.5px_0_#3b3b3b]">
        <div className="flex items-center">
          <Icons.msEdge className="size-5 mr-2" />
          <span className="text-sm font-bold">New tab</span>
        </div>
        <Icons.effacer className="size-3 fill-white" />
      </section>
    </div>
  );
}
