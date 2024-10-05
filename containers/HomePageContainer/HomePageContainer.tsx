function HomePageContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col flex-1 p-8 items-center justify-center w-full min-h-full">
      {children}
    </section>
  );
}

HomePageContainer.displayName = "HomePageContainer";
export default HomePageContainer;
