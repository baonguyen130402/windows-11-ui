import { createContext, useState } from "react";

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
  const [isOpening, setIsOpen] = useState(false);
  const [isMinimize, setIsMinimize] = useState(false);
  const [isMaximize, setIsMaximize] = useState(false);

  const [isPinOn, setIsPinOn] = useState(true);

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
