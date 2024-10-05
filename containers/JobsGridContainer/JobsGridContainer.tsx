function JobsGridContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
}

JobsGridContainer.displayName = "JobsGridContainer";
export default JobsGridContainer;
