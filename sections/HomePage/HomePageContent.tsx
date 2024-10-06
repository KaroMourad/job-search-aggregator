import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SearchForm } from "@/components/SearchForm";

function HomePageContent() {
  return (
    <ErrorBoundary>
      <h1 className="text-4xl md:text-6xl text-center font-black mb-4">
        Find Your Dream Job effortlessly!
      </h1>
      <p className="text-2xl leading-normal md:text-4xl md:leading-relaxed mb-8 text-center font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        Search for jobs from multiple sources in one place.
      </p>
      <SearchForm />
    </ErrorBoundary>
  );
}

HomePageContent.displayName = "HomePageContent";
export default HomePageContent;
