import { Input } from "../../../../lib/components/ui/input";
import { Icons } from "../../../../lib/icons";

export function Navbar() {
  return (
    <nav className="grid grid-cols-12 w-full h-12 gap-2 px-2 py-1 bg-[#191d27]">
      <div className="col-span-2 flex items-center gap-4 justify-center">
        <div className="p-1">
          <Icons.arrowLeft className="size-4 fill-white" />
        </div>
        <div className="p-1">
          <Icons.arrowRight className="size-4 fill-white" />
        </div>
        <div className="p-1">
          <Icons.arrowRight className="size-4 fill-white -rotate-90" />
        </div>
        <div className="p-1">
          <Icons.refresh className="size-4 fill-transparent" />
        </div>
      </div>
      <div className="flex self-center items-center px-2 z-10 col-span-7 bg-[#242732] h-8 rounded-[0.1rem]">
        <Icons.thisPc className="size-3 fill-white" />
        <Input placeholder="" className="px-2 border-none" />
      </div>
      <div className="col-span-3 self-center col-start-10 bg-[#242732] flex items-center px-2 h-8 rounded-[0.1rem]">
        <Input placeholder="Search all files" className="px-2 border-none" />
        <Icons.search className="size-3 fill-white" />
      </div>
    </nav>
  );
}
