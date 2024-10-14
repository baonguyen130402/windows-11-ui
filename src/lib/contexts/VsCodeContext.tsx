import { createContext, useEffect, useState } from "react";
import { getStateFromLocalStorage } from "../helper";

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
  const vsCode = getStateFromLocalStorage("vsCode");

  const [isOpening, setIsOpen] = useState(
    vsCode.isOpening !== undefined ? vsCode.isOpening : false,
  );
  const [isMinimize, setIsMinimize] = useState(
    vsCode.isMinimize !== undefined ? vsCode.isMinimize : false,
  );
  const [isMaximize, setIsMaximize] = useState(
    vsCode.isMaximize !== undefined ? vsCode.isMaximize : false,
  );
  const [isPinOn, setIsPinOn] = useState(
    vsCode.isPinOn !== undefined ? vsCode.isPinOn : false,
  );

  useEffect(() => {
    localStorage.setItem(
      "vsCode",
      JSON.stringify({
        isOpening: isOpening,
        isMaximize: isMaximize,
        isMinimize: isMinimize,
        isPinOn: isPinOn,
      }),
    );
  }, [isOpening, isMinimize, isMaximize, isPinOn]);

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
