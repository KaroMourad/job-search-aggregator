import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import RootLayout from "@/layouts/layout";
import { Job } from "@/types/Job";
import { SearchForm } from "@/components/SearchForm";
import { Loading } from "@/components/Loading";
import { JobCard } from "@/components/JobCard";
import { JobsGridContainer } from "@/containers/JobsGridContainer";
import { SearchPageContainer } from "@/containers/SearchPageContainer";

const Search = () => {
  const router = useRouter();
  const { title, location } = router.query;
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setJobs([]);
        const requests = [
          fetch(`/api/jobs/api1`).then((res) => res.json()),
          fetch(`/api/jobs/api2`).then((res) => res.json()),
          fetch(`/api/jobs/api3`).then((res) => res.json()),
        ];

        const response = await Promise.allSettled(requests);
        const successfulResponses = response
          .filter((result) => result.status === "fulfilled")
          .flatMap((result) => (result as PromiseFulfilledResult<Job[]>).value)
          .filter(
            (job) =>
              job.title
                .toLowerCase()
                .includes((title as string)?.toLowerCase()) ||
              job.location
                .toLowerCase()
                .includes((location as string)?.toLowerCase())
          );

        setJobs(successfulResponses);
      } catch (error) {
        // @TODO Handle error
        setError("Failed to fetch jobs. Please try again." + error);
      } finally {
        setLoading(false);
      }
    };

    if (title || location) {
      fetchJobs();
    }
  }, [title, location]);

  return (
    <RootLayout>
      <SearchPageContainer>
        <h2 className="text-2xl font-semibold mb-4">
          Job Results for "{title}" in "{location}"
        </h2>
        <SearchForm />
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
            <p>
              No jobs found. Try searching for a different role or location.
            </p>
          </div>
        )}
        <JobsGridContainer>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} className="max-w-[300px]" />
          ))}
        </JobsGridContainer>
      </SearchPageContainer>
    </RootLayout>
  );
};

export default Search;
