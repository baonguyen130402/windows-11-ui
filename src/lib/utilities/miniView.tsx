import { useContext } from "react";
import { MsEdge } from "../../components/apps/ms-edge";
import { MsEdgeContext } from "../contexts/MsEdgeContext";

export function MiniView() {
  const { msEdgeOpening } = useContext(MsEdgeContext);

  return (
    <div className="absolute hidden w-[130px] h-[150px] bg-[#1d1d1d] bottom-[55px] rounded-[0.3em] p-[0.5em] group-hover:block flex-col items-center gap-y-2">
      <MsEdge isOpen={msEdgeOpening} inMiniview={true} />
    </div>
  );
}
