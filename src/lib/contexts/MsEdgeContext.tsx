import { createContext, useState } from "react";

interface Props {
  msEdgeOpening: boolean;
  setMsEdgeOpening: (isOpening: boolean) => void;
  msEdgeMinimize: boolean;
  setMsEdgeMinimize: (isMinimize: boolean) => void;
  msEdgeMaximize: boolean;
  setMsEdgeMaximize: (isMaximize: boolean) => void;
}

export const MsEdgeContext = createContext<Props>({
  msEdgeOpening: false,
  setMsEdgeOpening: () => { },
  msEdgeMinimize: false,
  setMsEdgeMinimize: () => { },
  msEdgeMaximize: false,
  setMsEdgeMaximize: () => { },
});

export default function MsEdgeProvider({ children }) {
  const [isOpening, setIsOpen] = useState(false);
  const [isMinimize, setIsMinimize] = useState(false);
  const [isMaximize, setIsMaximize] = useState(false);

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
      }}
    >
      {children}
    </MsEdgeContext.Provider>
  );
}
