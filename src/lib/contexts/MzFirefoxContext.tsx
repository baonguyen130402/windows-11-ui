import { createContext, useState } from "react";

interface Props {
  mzFirefoxOpening: boolean;
  setMzFirefoxOpening: (isOpening: boolean) => void;
}

export const MzFirefoxContext = createContext<Props>({
  mzFirefoxOpening: false,
  setMzFirefoxOpening: () => { },
});

export default function MzFirefoxProvider({ children }) {
  const [isOpening, setIsOpen] = useState(false);

  return (
    <MzFirefoxContext.Provider
      value={{
        mzFirefoxOpening: isOpening,
        setMzFirefoxOpening: (value) => {
          setIsOpen(value);
        },
      }}
    >
      {children}
    </MzFirefoxContext.Provider>
  );
}
