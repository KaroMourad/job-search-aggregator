import { ErrorBoundary } from "@/components/ErrorBoundary";

function SearchPageContainer({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <section className="max-w-7xl m-auto flex flex-col flex-1 items-center p-6 w-full min-h-full">
        {children}
      </section>
    </ErrorBoundary>
  );
}

SearchPageContainer.displayName = "SearchPageContainer";
export default SearchPageContainer;
