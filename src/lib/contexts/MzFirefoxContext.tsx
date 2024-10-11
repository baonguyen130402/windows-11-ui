import { createContext, useState } from "react";

interface Props {
  mzFirefoxOpening: boolean;
  setMzFirefoxOpening: (isOpening: boolean) => void;
  mzFirefoxMinimize: boolean;
  setMzFirefoxMinimize: (isMinimize: boolean) => void;
  mzFirefoxMaximize: boolean;
  setMzFirefoxMaximize: (isMaximize: boolean) => void;
  mzFirefoxPinOnTaskbar: boolean;
  setMzFirefoxPinOnTaskbar: (isMaximize: boolean) => void;
}

export const MzFirefoxContext = createContext<Props>({
  mzFirefoxOpening: false,
  setMzFirefoxOpening: () => { },
  mzFirefoxMinimize: false,
  setMzFirefoxMinimize: () => { },
  mzFirefoxMaximize: false,
  setMzFirefoxMaximize: () => { },
  mzFirefoxPinOnTaskbar: true,
  setMzFirefoxPinOnTaskbar: () => { },
});

export default function MzFirefoxProvider({ children }: { children: any }) {
  const [isOpening, setIsOpen] = useState(false);
  const [isMinimize, setIsMinimize] = useState(false);
  const [isMaximize, setIsMaximize] = useState(false);

  const [isPinOn, setIsPinOn] = useState(true);

  return (
    <MzFirefoxContext.Provider
      value={{
        mzFirefoxOpening: isOpening,
        setMzFirefoxOpening: (value) => {
          setIsOpen(value);
        },
        mzFirefoxMinimize: isMinimize,
        setMzFirefoxMinimize: (value) => {
          setIsMinimize(value);
        },
        mzFirefoxMaximize: isMaximize,
        setMzFirefoxMaximize: (value) => {
          setIsMaximize(value);
        },
        mzFirefoxPinOnTaskbar: isPinOn,
        setMzFirefoxPinOnTaskbar: (value) => {
          setIsPinOn(value);
        },
      }}
    >
      {children}
    </MzFirefoxContext.Provider>
  );
}
