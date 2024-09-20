import { Icons } from "../../../../lib/icons";

export function Bookmark() {
  return (
    <div className="w-full h-8 px-2 flex items-center">
      <div className="flex items-center gap-x-2 border-r pr-4">
        <Icons.folderImport className="size-5" />
        <span className="text-xs tracking-tighter text-white font-semibold">
          Import favourites
        </span>
      </div>
      <div className="pl-4 flex items-center h-5 gap-x-2">
        <span className="text-xs tracking-tighter text-white font-semibold">
          For quick access, place your favourites here on favourites bar.
        </span>
        <a className="text-[#74abe0] text-xs underline hover:text-blue-300 hover:cursor-pointer">Manage favourites now</a>
      </div>
    </div>
  );
}
