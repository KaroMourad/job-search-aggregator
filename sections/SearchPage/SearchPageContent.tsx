import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import useGetJobsData from "./useGetJobsData";
import { Loading } from "@/components/Loading";
import { JobsGridContainer } from "../JobsGrid";
import { JobCard } from "@/components/JobCard";
import { SearchForm } from "@/components/SearchForm";
import { ErrorBoundary } from "@/components/ErrorBoundary";

function SearhPageContent() {
  const searchParams = useSearchParams();
  const queryTitle = searchParams.get("title") || "";
  const queryLocation = searchParams.get("location") || "";

  const { loading, error, jobs, title, location, onSearch } = useGetJobsData(
    queryTitle,
    queryLocation
  );

  return (
    <ErrorBoundary>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">
        Job Results for "{title || "All jobs"}" in "
        {location || "All Locations"}" ({jobs.length})
      </h2>
      <SearchForm onSearch={onSearch} />
      {loading && <Loading text="Loading Jobs..." />}
      {error && (
        <div className="flex flex-col items-center flex-1 ">
          <Image
            src="/images/illustrations/error.svg"
            alt="Error fetching jobs"
            width={288}
            height={288}
            className="w-72 h-72 md:w-96 md:h-96"
          />
          <p className="mt-4">{error}</p>
        </div>
      )}
      {!loading && !error && jobs.length === 0 && (
        <div className="flex flex-col items-center flex-1 ">
          <Image
            src="/images/illustrations/empty.svg"
            alt="No jobs found"
            width={288}
            height={288}
            className="w-72 h-72 md:w-96 md:h-96"
          />
          <p>No jobs found. Try searching for a different role or location.</p>
        </div>
      )}
      {jobs.length > 0 && (
        <JobsGridContainer>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              className="min-w-full sm:min-w-64 max-w-80 w-full min-h-full h-64 md:h-60"
            />
          ))}
        </JobsGridContainer>
      )}
    </ErrorBoundary>
  );
}

SearhPageContent.displayName = "SearhPageContent";
export default React.memo(SearhPageContent);
