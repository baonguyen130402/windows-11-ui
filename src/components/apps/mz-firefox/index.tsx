import { Bookmark } from "./components/bookmark";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { PagePin } from "./components/pagePin";
import { SearchForm } from "./components/searchForm";

export function MzFirefox() {
  return (
    <article className="absoluted w-[1000px] h-[600px] bg-gray-900 fixed top-[50px] left-1/3 rounded-[0.5rem] overflow-hidden">
      <Header />
      <div className="bg-gray-700">
        <Navbar />
        <Bookmark />
      </div>
      <div className="flex flex-col items-center justify-center p-2 w-full gap-12">
        <SearchForm />
        <PagePin />
      </div>
    </article>
  );
}
