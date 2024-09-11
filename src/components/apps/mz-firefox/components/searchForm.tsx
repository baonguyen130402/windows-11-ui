import { Input } from "../../../../lib/components/ui/input";
import { Icons } from "../../../../lib/icons";

export function SearchForm() {
  return (
    <>
      <div className="flex items-center gap-4">
        <Icons.firefox className="size-[8rem]" />
        <span className="text-4xl font-bold">Firefox</span>
      </div>
      <div className="col-span-3 border border-gray-700 flex items-center px-2 w-3/5 bg-gray-700 shadow-black shadow-lg">
        <Icons.google className="size-3 fill-white" />
        <Input
          placeholder="Search with Google or enter address"
          className="px-2 border-none"
        />
      </div>
    </>
  );
}
