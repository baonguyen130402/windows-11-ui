import "./App.css";
import { MainLayout } from "./components/mainLayout";
import ModalProvider from "./lib/contexts/ModalContext";

function App() {
  return (
    <ModalProvider>
      <MainLayout />
    </ModalProvider>
  );
}

export default App;
