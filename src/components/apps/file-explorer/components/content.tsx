import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

export function Content() {
  return (
    <div className="bg-slate-900 h-[calc(600px-5.5rem)]">
      <Navbar />
      <Sidebar />
    </div>
  );
}
