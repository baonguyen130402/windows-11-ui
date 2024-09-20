import { Input } from "../../../../lib/components/ui/input";
import { Icons } from "../../../../lib/icons";

const icons = [
  <Icons.extension className="size-5" />,
  <Icons.extension className="size-5" />,
  <Icons.extension className="size-5" />,
  <Icons.extension className="size-5" />,
  <Icons.epplipsisHorizontal className="size-5" />,
  <Icons.copilot className="size-7" />,
];
export function Navbar() {
  return (
    <nav className="grid grid-cols-24 items-center w-full h-10 px-2">
      <div className="col-span-3 justify-self-start flex items-center gap-4 justify-center">
        <div className="p-1">
          <Icons.arrowLeft className="size-4 fill-white" />
        </div>
        <div className="p-1">
          <Icons.arrowRight className="size-4 fill-white" />
        </div>
        <div className="p-1">
          <Icons.refresh className="size-4 fill-transparent" />
        </div>
      </div>
      <div className="col-start-4 col-span-15 h-8 px-4 flex items-center bg-[#2b2b2b] rounded-full z-10">
        <Icons.search className="size-4 fill-white" />
        <Input
          placeholder="Search with Google or enter address"
          className="px-2 border-none"
        />
        <Icons.bookmark className="size-5" />
      </div>
      {icons.map((icon) => (
        <div className="self-center justify-self-center hover:bg-[#555] px-2 py-1 rounded-[0.25rem]">
          {icon}
        </div>
      ))}
    </nav>
  );
}
