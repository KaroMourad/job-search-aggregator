import React from "react";
import Image from "next/image";
import useGetJobsData from "./useGetJobsData";
import { Loading } from "@/components/Loading";
import { JobsGridContainer } from "../JobsGrid";
import { JobCard } from "@/components/JobCard";
import { SearchForm } from "@/components/SearchForm";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SearchPagePagination } from ".";
function SearhPageContent() {
  const {
    jobs,
    loading,
    error,
    onSearch,
    title,
    location,
    nextPage,
    canGoNext,
    canGoPrev,
    prevPage,
    page,
  } = useGetJobsData();

  return (
    <ErrorBoundary>
      <h1 className="text-4xl font-semibold text-center mt-10 mb-6">
        Find your dream job
      </h1>
      <SearchForm onSearch={onSearch} />
      <p className="text-xl font-semibold mt-10 text-center">
        Job Results for "{title || "All jobs"}" in "
        {location || "All Locations"}"
      </p>
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
              className="min-w-full sm:min-w-64 w-full min-h-full h-64 md:h-60"
            />
          ))}
        </JobsGridContainer>
      )}
      {!error && jobs.length !== 0 && (
        <SearchPagePagination
          nextPage={nextPage}
          canGoNext={canGoNext}
          canGoPrev={canGoPrev}
          prevPage={prevPage}
          page={page}
        />
      )}
    </ErrorBoundary>
  );
}

SearhPageContent.displayName = "SearhPageContent";
export default React.memo(SearhPageContent);