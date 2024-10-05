import { ErrorBoundary } from "@/components/ErrorBoundary";

function HomePageContainer({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <section className="max-w-7xl m-auto flex flex-col flex-1 p-6 pt-16 items-center justify-center w-full min-h-full">
        {children}
      </section>
    </ErrorBoundary>
  );
}

HomePageContainer.displayName = "HomePageContainer";
export default HomePageContainer;
