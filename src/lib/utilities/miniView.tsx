import { MsEdge } from "../../components/apps/ms-edge";

export function MiniView() {
  return (
    <div className="absolute w-[130px] h-[150px] bg-[#1d1d1d] bottom-[55px] rounded-[0.3em] p-[0.5em] hidden group-hover:flex flex-col items-center gap-y-2">
      <div className="flex items-center gap-2 w-full">
        <img src="/images/apps/edge.png" className="size-6" />
        <span className="line-clamp-1 text-sm w-full">
          New tab - Profile 1 - Microsoft Edge
        </span>
      </div>
      <div className="w-[114px] h-[120px] bg-white overflow-hidden">
      </div>
    </div>
  );
}
