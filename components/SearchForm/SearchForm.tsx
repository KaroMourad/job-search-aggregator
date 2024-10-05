import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SearchFormProps } from "./SearchForm.types";
import { useSearchParams } from "next/navigation";

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryTitle = searchParams.get("title") || "";
  const queryLocation = searchParams.get("location") || "";

  const [title, setTitle] = useState(queryTitle || "");
  const [location, setLocation] = useState(queryLocation || "");

  useEffect(() => {
    setTitle(queryTitle || "");
    setLocation(queryLocation || "");
    if (typeof onSearch === "function") {
      onSearch({
        title: queryTitle,
        location: queryLocation,
      });
      return;
    }
  }, [queryTitle, queryLocation, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      title: title.trim(),
      location: location.trim(),
    };
    if (typeof onSearch === "function") {
      onSearch(data);
      return;
    }
    const params = new URLSearchParams(data);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <ErrorBoundary>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs md:max-w-2xl flex flex-col md:flex-row items-center justify-between"
      >
        <div className="flex flex-col md:flex-row items-center w-full gap-4">
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
    </ErrorBoundary>
  );
};

SearchForm.displayName = "SearchForm";
export default SearchForm;
