import { Icons } from "../../lib/icons";
import { Input } from "../../lib/components/ui/input";

export function SearchBtn() {
  return (
    <div className="relative hover:bg-[rgba(255,255,255,.16)] rounded-full transition duration-100 ease-linear">
      <Input
        type="text"
        placeholder="Search"
        className="pl-8 h-8 border-slate-500 bg-[rgba(255,255,255,.15)] backdrop-blur-lg rounded-full focus-visible:bg-[rgba(255,255,255,.16)]"
      />
      <Icons.search className="size-4 absolute left-2 top-[25%]"/>
    </div>
  );
}
