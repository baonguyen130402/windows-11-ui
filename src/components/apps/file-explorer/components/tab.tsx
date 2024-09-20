import { Icons } from "../../../../lib/icons";

export function Tab() {
  return (
    <div className="relative w-1/6 self-end">
      <section className="self-end flex items-center justify-between w-full h-7 bg-[#2c2c2c] px-2 rounded-[0.25rem] rounded-bl-[0] rounded-br-[0] after:absolute after:w-5 after:h-5 after:-bottom-[0.3px] after:-right-[19.7px] after:bg-transparent after:rounded-full after:shadow-[-6.5px_6.5px_0_#2c2c2c] before:absolute before:w-4 before:h-4 before:-bottom-[0.3px] before:-left-[16.7px] before:rounded-full before:shadow-[6.5px_6.5px_0_#2c2c2c]">
        <div className="flex items-center">
          <Icons.home className="size-5 mr-2" />
          <span className="text-sm font-bold">Home</span>
        </div>
        <Icons.effacer className="size-3 fill-white" />
      </section>
    </div>
  );
}
