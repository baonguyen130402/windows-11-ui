import { createContext, useEffect, useState } from "react";
import { getStateFromLocalStorage } from "../helper";

interface Props {
  msEdgeOpening: boolean;
  setMsEdgeOpening: (isOpening: boolean) => void;
  msEdgeMinimize: boolean;
  setMsEdgeMinimize: (isMinimize: boolean) => void;
  msEdgeMaximize: boolean;
  setMsEdgeMaximize: (isMaximize: boolean) => void;
  msEdgePinOnTaskbar: boolean;
  setMsEdgePinOnTaskbar: (isMaximize: boolean) => void;
}

export const MsEdgeContext = createContext<Props>({
  msEdgeOpening: false,
  setMsEdgeOpening: () => { },
  msEdgeMinimize: false,
  setMsEdgeMinimize: () => { },
  msEdgeMaximize: false,
  setMsEdgeMaximize: () => { },
  msEdgePinOnTaskbar: true,
  setMsEdgePinOnTaskbar: () => { },
});

export default function MsEdgeProvider({ children }: { children: any }) {
  const msEdge = getStateFromLocalStorage("msEdge");

  const [isOpening, setIsOpen] = useState(
    msEdge.isOpening !== undefined ? msEdge.isOpening : false,
  );
  const [isMinimize, setIsMinimize] = useState(
    msEdge.isMinimize !== undefined ? msEdge.isMinimize : false,
  );
  const [isMaximize, setIsMaximize] = useState(
    msEdge.isMaximize !== undefined ? msEdge.isMaximize : false,
  );
  const [isPinOn, setIsPinOn] = useState(
    msEdge.isPinOn !== undefined ? msEdge.isPinOn : true,
  );

  useEffect(() => {
    localStorage.setItem(
      "msEdge",
      JSON.stringify({
        isOpening: isOpening,
        isMaximize: isMaximize,
        isMinimize: isMinimize,
        isPinOn: isPinOn,
      }),
    );
  }, [isOpening, isMinimize, isMaximize, isPinOn]);

  return (
    <MsEdgeContext.Provider
      value={{
        msEdgeOpening: isOpening,
        setMsEdgeOpening: (value) => {
          setIsOpen(value);
        },
        msEdgeMinimize: isMinimize,
        setMsEdgeMinimize(value) {
          setIsMinimize(value);
        },
        msEdgeMaximize: isMaximize,
        setMsEdgeMaximize(value) {
          setIsMaximize(value);
        },
        msEdgePinOnTaskbar: isPinOn,
        setMsEdgePinOnTaskbar(value) {
          setIsPinOn(value);
        },
      }}
    >
      {children}
    </MsEdgeContext.Provider>
  );
}
