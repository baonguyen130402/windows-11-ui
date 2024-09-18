import { createContext, useState } from "react";

interface Props {
  brightness: number;
  setBrightness: (isOpening: number) => void;
}

export const BrightnessContext = createContext<Props>({
  brightness: 0,
  setBrightness: () => { },
});

export default function BrightnessProvider({ children }) {
  const [isOpening, setIsOpen] = useState(100);

  return (
    <BrightnessContext.Provider
      value={{
        brightness: isOpening,
        setBrightness: (value) => {
          setIsOpen(value);
        },
      }}
    >
      {children}
    </BrightnessContext.Provider>
  );
}
