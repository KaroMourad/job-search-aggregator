import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchForm = () => {
  const router = useRouter();
  const { title: queryTitle, location: queryLocation } = router.query;

  const [title, setTitle] = useState((queryTitle as string) || "");
  const [location, setLocation] = useState((queryLocation as string) || "");

  useEffect(() => {
    setTitle((queryTitle as string) || "");
    setLocation((queryLocation as string) || "");
  }, [queryTitle, queryLocation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() && !location.trim()) {
      alert("Please fill one of the fields");
      return;
    }
    router.push(`/search?title=${title}&location=${location}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm md:max-w-2xl flex flex-col md:flex-row items-center justify-between"
    >
      <div className="flex flex-col md:flex-row items-center w-full gap-2">
        <div className="w-full">
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm bg-primary-foreground"
            placeholder="e.g., Frontend Developer"
            aria-label="Job Title"
          />
        </div>
        <div className="w-full">
          <Input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm bg-primary-foreground"
            placeholder="e.g., New York"
            aria-label="Job Location"
          />
        </div>
      </div>
      <Button
        type="submit"
        variant="default"
        disabled={!title.trim() && !location.trim()}
        className="ml-2 md:mt-0 mt-4"
      >
        Find Jobs
      </Button>
    </form>
  );
};

SearchForm.displayName = "SearchForm";
export default SearchForm;
