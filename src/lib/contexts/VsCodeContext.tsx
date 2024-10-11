import { createContext, useState } from "react";

interface Props {
  vsCodeOpening: boolean;
  setVSCodeOpening: (isOpening: boolean) => void;
  vsCodeMinimize: boolean;
  setVsCodeMinimize: (isMinimize: boolean) => void;
  vsCodeMaximize: boolean;
  setVsCodeMaximize: (isMaximize: boolean) => void;
  vsCodePinOnTaskbar: boolean;
  setVSCodePinOnTaskbar: (isPinOn: boolean) => void;
}

export const VSCodeContext = createContext<Props>({
  vsCodeOpening: false,
  setVSCodeOpening: () => { },
  vsCodeMinimize: false,
  setVsCodeMinimize: () => { },
  vsCodeMaximize: false,
  setVsCodeMaximize: () => { },
  vsCodePinOnTaskbar: false,
  setVSCodePinOnTaskbar: () => { },
});

export default function VSCodeProvider({ children }: { children: any }) {
  const [isOpening, setIsOpen] = useState(false);
  const [isMinimize, setIsMinimize] = useState(false);
  const [isMaximize, setIsMaximize] = useState(false);

  const [isPinOn, setIsPinOn] = useState(false);

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
        vsCodePinOnTaskbar: isPinOn,
        setVSCodePinOnTaskbar: (value) => {
          setIsPinOn(value);
        },
      }}
    >
      {children}
    </VSCodeContext.Provider>
  );
}
