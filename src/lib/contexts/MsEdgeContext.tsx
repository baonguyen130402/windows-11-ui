import { createContext, useState } from "react";

interface Props {
  msEdgeOpening: boolean;
  setMsEdgeOpening: (isOpening: boolean) => void;
}

export const MsEdgeContext = createContext<Props>({
  msEdgeOpening: false,
  setMsEdgeOpening: () => { },
});

export default function MsEdgeProvider({ children }) {
  const [isOpening, setIsOpen] = useState(false);

  return (
    <MsEdgeContext.Provider
      value={{
        msEdgeOpening: isOpening,
        setMsEdgeOpening: (value) => {
          setIsOpen(value);
        },
      }}
    >
      {children}
    </MsEdgeContext.Provider>
  );
}
