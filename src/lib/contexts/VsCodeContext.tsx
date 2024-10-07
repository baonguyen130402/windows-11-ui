import { createContext, useState } from "react";

interface Props {
  vsCodeOpening: boolean;
  setVSCodeOpening: (isOpening: boolean) => void;
  vsCodeMinimize: boolean;
  setVsCodeMinimize: (isMinimize: boolean) => void;
  vsCodeMaximize: boolean;
  setVsCodeMaximize: (isMaximize: boolean) => void;
}

export const VSCodeContext = createContext<Props>({
  vsCodeOpening: false,
  setVSCodeOpening: () => { },
  vsCodeMinimize: false,
  setVsCodeMinimize: () => { },
  vsCodeMaximize: false,
  setVsCodeMaximize: () => { },
});

export default function VSCodeProvider({ children }) {
  const [isOpening, setIsOpen] = useState(false);
  const [isMinimize, setIsMinimize] = useState(false);
  const [isMaximize, setIsMaximize] = useState(false);

  return (
    <VSCodeContext.Provider
      value={{
        vsCodeOpening: isOpening,
        setVSCodeOpening: (value) => {
          setIsOpen(value);
        },
        vsCodeMinimize: isMinimize,
        setVsCodeMinimize: (value) => {
          setIsMinimize(value);
        },
        vsCodeMaximize: isMaximize,
        setVsCodeMaximize: (value) => {
          setIsMaximize(value);
        },
      }}
    >
      {children}
    </VSCodeContext.Provider>
  );
}
