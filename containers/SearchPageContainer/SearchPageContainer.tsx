function SearchPageContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col flex-1 items-center p-8 w-full min-h-full">
      {children}
    </section>
  );
}

SearchPageContainer.displayName = "SearchPageContainer";
export default SearchPageContainer;
