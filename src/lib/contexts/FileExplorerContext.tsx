import { createContext, useState } from "react";

interface Props {
  fileExplorerOpening: boolean;
  setFileExplorerOpening: (isOpening: boolean) => void;
}

export const FileExplorerContext = createContext<Props>({
  fileExplorerOpening: false,
  setFileExplorerOpening: () => { },
});

export default function FileExplorerProvider({ children }) {
  const [isOpening, setIsOpen] = useState(false);

  return (
    <FileExplorerContext.Provider
      value={{
        fileExplorerOpening: isOpening,
        setFileExplorerOpening: (value) => {
          setIsOpen(value);
        },
      }}
    >
      {children}
    </FileExplorerContext.Provider>
  );
}
