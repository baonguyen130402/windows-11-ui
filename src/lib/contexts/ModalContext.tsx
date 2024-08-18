import { createContext, useState } from "react";

interface Props {
  isOpening: boolean;
  setIsOpening: (isOpening: boolean) => void;
}

export const ModalContext = createContext<Props>({
  isOpening: false,
  setIsOpening: () => { },
});

export default function ModalProvider({ children }) {
  const [isOpening, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isOpening: isOpening,
        setIsOpening: (value) => {
          setIsOpen(value);
        },
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
