import { ErrorBoundary } from "@/components/ErrorBoundary";

function JobsGridContainer({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <section className="max-w-7xl w-full h-full flex justify-center mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {children}
        </div>
      </section>
    </ErrorBoundary>
  );
}

JobsGridContainer.displayName = "JobsGridContainer";
export default JobsGridContainer;
