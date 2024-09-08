import { createContext, useState } from "react";

interface Props {
  fireExploreOpening: boolean;
  setFileExplorerOpening: (isOpening: boolean) => void;
}

export const FileExplorerContext = createContext<Props>({
  fireExploreOpening: false,
  setFileExplorerOpening: () => { },
});

export default function FileExplorerProvider({ children }) {
  const [isOpening, setIsOpen] = useState(false);

  return (
    <FileExplorerContext.Provider
      value={{
        fireExploreOpening: isOpening,
        setFileExplorerOpening: (value) => {
          setIsOpen(value);
        },
      }}
    >
      {children}
    </FileExplorerContext.Provider>
  );
}
