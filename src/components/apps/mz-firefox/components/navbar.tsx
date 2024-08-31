import { Input } from "../../../../lib/components/ui/input";
import { Icons } from "../../../../lib/icons";

export function Navbar() {
  return (
    <nav className="grid grid-cols-12 w-full h-12 gap-2 px-2 py-1">
      <div className="col-span-2 justify-self-start flex items-center gap-4 justify-center">
        <div className="p-1">
          <Icons.arrowLeft className="size-5 fill-white" />
        </div>
        <div className="p-1">
          <Icons.arrowRight className="size-5 fill-white" />
        </div>
        <div className="p-1">
          <Icons.refresh className="size-5 fill-transparent" />
        </div>
      </div>
      <div className="col-span-7 border border-gray-500 flex items-center px-2 bg-neutral-900">
        <Icons.search className="size-5 fill-white" />
        <Input
          placeholder="Search with Google or enter address"
          className="px-2 border-none"
        />
      </div>
      <div className="justify-self-end col-span-3 self-center pr-2">
        <Icons.burgerMenu className="size-5 fill-white" />
      </div>
    </nav>
  );
}
