import { Icons } from "../../lib/icons";

export function HomeBtn() {
  return (
    <div className="group hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] bg-transparent flex items-center justify-center hover:w-10 hover:h-10 w-10 h-10 p-1">
      <Icons.windows className="size-7 group-hover:hidden" />
      <Icons.windowsHover className="size-7 hidden group-hover:block" />
    </div>
  );
}
