import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RootLayout from "@/layouts/layout";
import { Job } from "@/types/Job";
import { SearchForm } from "@/components/SearchForm";

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
                .includes((title as string)?.toLowerCase()) &&
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

    if (title && location) {
      fetchJobs();
    }
  }, [title, location]);

  return (
    <RootLayout>
      <section className="flex flex-col flex-1 items-center p-8 w-full min-h-full">
        <h2 className="text-2xl font-semibold mb-4">
          Job Results for "{title}" in "{location}"
        </h2>
        <SearchForm />
        {!loading && <p>Loading jobs...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && jobs.length === 0 && (
          <p>No jobs found. Try searching for a different role or location.</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
              <p className="text-sm mt-2">{job.description}</p>
              {job.salary && <p className="mt-2 font-semibold">{job.salary}</p>}
              <a
                href={job.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </RootLayout>
  );
};

export default Search;
