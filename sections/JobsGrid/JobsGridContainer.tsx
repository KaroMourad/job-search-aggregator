import { ErrorBoundary } from "@/components/ErrorBoundary";

function JobsGridContainer({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <section className="w-full h-full flex justify-center mt-8">
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {children}
        </div>
      </section>
    </ErrorBoundary>
  );
}

JobsGridContainer.displayName = "JobsGridContainer";
export default JobsGridContainer;
