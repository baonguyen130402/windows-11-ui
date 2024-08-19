import { Icons } from "../../lib/icons";

export function Desktop() {
  return (
    <section className="w-screen h-[calc(100%-3rem)] bg-transparent p-2.5 grid grid-rows-9 grid-cols-18 gap-y-8 gap-x-2.5">
      <div className="row-start-1 col-start-1 grid text-center hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] p-1">
        <Icons.folder className="size-12 justify-self-center" />
        <span className="text-sm">Folder</span>
      </div>
      <div className="row-start-2 col-start-1 grid text-center hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] p-1">
        <Icons.firefox className="size-11 justify-self-center" />
        <span className="text-sm">Firefox</span>
      </div>
    </section>
  );
}
