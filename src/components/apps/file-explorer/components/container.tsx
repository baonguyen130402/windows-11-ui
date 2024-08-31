import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Content } from "./content";

export function Container() {
  return (
    <div className="bg-slate-900 h-[calc(600px-5.5rem)]">
      <Navbar />
      <div className="grid grid-cols-12 h-full">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
