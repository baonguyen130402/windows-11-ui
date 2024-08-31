import { Input } from "../../../../lib/components/ui/input";
import { Icons } from "../../../../lib/icons";

export function Navbar() {
  return (
    <nav className="grid grid-cols-12 w-full h-12 gap-2 px-2 py-1">
      <div className="col-span-2 flex items-center gap-4 justify-center">
        <div className="p-1">
          <Icons.arrowLeft className="size-5 fill-white" />
        </div>
        <div className="p-1">
          <Icons.arrowRight className="size-5 fill-white" />
        </div>
        <div className="p-1">
          <Icons.lineAngleUp className="size-2 fill-white" />
        </div>
        <div className="p-1">
          <Icons.arrowRight className="size-5 fill-white" />
        </div>
      </div>
      <div className="col-span-7 border border-gray-700">
      </div>
      <div className="col-span-3 border border-gray-700 flex items-center px-2">
        <Icons.search2 className="size-3 fill-white"/>
        <Input placeholder="Search all files" className="px-2 border-none"/>
      </div>
    </nav>
  );
}
