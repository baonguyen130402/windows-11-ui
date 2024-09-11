import { Icons } from "../../../../lib/icons";

export function Tab() {
  return (
      <section className="relative after:absolute after:w-1/5 after:h-8  after:-bottom-0 after:-left-[39px] after:rounded-br-[0.5rem] after:z-10 after:bg-gray-900/80 before:absolute before:w-1/5 before:h-8 before:border-red before:-bottom-0 before:-right-[39px] before:rounded-bl-[0.5rem] before:z-10 before:bg-gray-900/80 self-end flex items-center justify-between w-1/5 h-8 bg-gray-700/40 px-2 rounded-tl-[0.5rem] rounded-tr-[0.5rem]">
        <div className="flex items-center">
          <Icons.home className="size-5 mr-2" />
          <span className="text-sm font-bold">Home</span>
        </div>
        <Icons.effacer className="size-3 fill-white" />
      </section>

  );
}
