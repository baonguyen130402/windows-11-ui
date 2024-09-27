import { createContext, useState } from "react";

interface Props {
  msEdgeOpening: boolean;
  setMsEdgeOpening: (isOpening: boolean) => void;
  msEdgeMinimize: boolean;
  setMsEdgeMinimize: (isOpening: boolean) => void;
}

export const MsEdgeContext = createContext<Props>({
  msEdgeOpening: false,
  setMsEdgeOpening: () => { },
  msEdgeMinimize: false,
  setMsEdgeMinimize: () => { },
});

export default function MsEdgeProvider({ children }) {
  const [isOpening, setIsOpen] = useState(false);
  const [isMinimize, setIsMinimize] = useState(false);

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
      }}
    >
      {children}
    </MsEdgeContext.Provider>
  );
}
