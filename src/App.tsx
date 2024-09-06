import "./App.css";
import { MainLayout } from "./components/mainLayout";
import ModalProvider from "./lib/contexts/ModalContext";
import { ThemeProvider } from "./lib/theme/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModalProvider>
        <MainLayout />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
