import { createContext, useState } from "react";

interface Props {
  mzFirefoxOpening: boolean;
  setMzFirefoxOpening: (isOpening: boolean) => void;
  mzFirefoxMinimize: boolean;
  setMzFirefoxMinimize: (isOpening: boolean) => void;
  mzFirefoxMaximize: boolean;
  setMzFirefoxMaximize: (isOpening: boolean) => void;
}

export const MzFirefoxContext = createContext<Props>({
  mzFirefoxOpening: false,
  setMzFirefoxOpening: () => { },
  mzFirefoxMinimize: false,
  setMzFirefoxMinimize: () => { },
  mzFirefoxMaximize: false,
  setMzFirefoxMaximize: () => { },
});

export default function MzFirefoxProvider({ children }) {
  const [isOpening, setIsOpen] = useState(false);
  const [isMinimize, setIsMinimize] = useState(false);
  const [isMaximize, setIsMaximize] = useState(false);

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
      }}
    >
      {children}
    </MzFirefoxContext.Provider>
  );
}
