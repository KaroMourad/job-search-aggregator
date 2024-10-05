import Image from "next/image";
import { useRouter } from "next/router";
import useGetJobsData from "./useGetJobsData";
import { Loading } from "@/components/Loading";
import { JobsGridContainer } from "../JobsGrid";
import { JobCard } from "@/components/JobCard";
import { SearchForm } from "@/components/SearchForm";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import React from "react";

function SearhPageContent() {
  const router = useRouter();
  const { title: queryTitle, location: queryLocation } = router.query as {
    title: string;
    location: string;
  };

  const { loading, error, jobs, title, location, onSearch } = useGetJobsData(
    queryTitle,
    queryLocation
  );

  return (
    <ErrorBoundary>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">
        Job Results for "{title || "All jobs"}" in "
        {location || "All Locations"}"
      </h2>
      <SearchForm onSearch={onSearch} />
      {loading && <Loading text="Loading Jobs..." />}
      {error && (
        <div className="flex flex-col items-center justify-center flex-1 ">
          <Image
            src="/images/illustrations/error.svg"
            alt="Error fetching jobs"
            width={400}
            height={400}
          />
          <p>Failed to fetch jobs. Please try again.</p>
          <span>{error}</span>
        </div>
      )}
      {!loading && !error && jobs.length === 0 && (
        <div className="flex flex-col items-center justify-center flex-1 ">
          <Image
            src="/images/illustrations/empty.svg"
            alt="No jobs found"
            width={400}
            height={400}
          />
          <p>No jobs found. Try searching for a different role or location.</p>
        </div>
      )}
      <JobsGridContainer>
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            className="min-w-64 max-w-80 w-full min-h-full h-72 md:h-64"
          />
        ))}
      </JobsGridContainer>
    </ErrorBoundary>
  );
}

SearhPageContent.displayName = "SearhPageContent";
export default React.memo(SearhPageContent);
