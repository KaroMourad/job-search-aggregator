import RootLayout from "@/layouts/layout";
import { SearchForm } from "@/components/SearchForm";

const Home = () => {
  return (
    <RootLayout>
      <section className="flex flex-col flex-1 p-8 items-center justify-center w-full min-h-full">
        <h1 className="text-6xl text-center font-black mb-4">Find Your Dream Job effortlessly!</h1>
        <p className="mb-8 text-center text-4xl leading-relaxed font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          Search for jobs from multiple sources in one place.
        </p>
        <SearchForm />
      </section>
    </RootLayout>
  );
};

export default Home;
