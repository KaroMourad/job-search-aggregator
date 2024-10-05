import { useRouter } from "next/router";
import RootLayout from "@/layouts/layout";
import { SearchForm } from "@/components/SearchForm";
import { SearchPageContainer, SearchPageContent } from "@/sections/SearchPage";

const Search = () => {
  const router = useRouter();
  const { title, location } = router.query as {
    title: string;
    location: string;
  };
  return (
    <RootLayout>
      <SearchPageContainer>
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">
          Job Results for "{title || "All jobs"}" in "
          {location || "All Locations"}"
        </h2>
        <SearchForm />
        <SearchPageContent />
      </SearchPageContainer>
    </RootLayout>
  );
};

export default Search;
