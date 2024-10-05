import { handleError } from "@/lib/utils";
import { Job } from "@/types/Job";
import { useCallback, useEffect, useState } from "react";

function useGetJobsData(queryTitle: string, queryLocation: string) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState(queryTitle || "");
  const [location, setLocation] = useState(queryLocation || "");

  const onSearch = useCallback((data: { title: string; location: string }) => {
    setTitle(data.title);
    setLocation(data.location);
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setJobs([]);
        const params = new URLSearchParams({
          title,
          location,
        });
        const requests = [
          fetch(`/api/jobs/api1?${params.toString()}`).then((res) =>
            res.json()
          ),
          fetch(`/api/jobs/api2?${params.toString()}`).then((res) =>
            res.json()
          ),
          fetch(`/api/jobs/api3?${params.toString()}`).then((res) =>
            res.json()
          ),
        ];

        const response = await Promise.allSettled<Job[]>(requests);
        const successfulResponses = response
          .filter((result) => result.status === "fulfilled")
          .flatMap((result) => (result as PromiseFulfilledResult<Job[]>).value);

        setJobs(successfulResponses);
      } catch (error: unknown) {
        const err = handleError(error);
        setError(err.message);
        throw new Error(
          "Failed to fetch jobs. Please try again." + err.message
        );
      } finally {
        setLoading(false);
      }
    };

    if (title || location) {
      fetchJobs();
    }
  }, [title, location]);

  return { jobs, loading, error, title, location, onSearch };
}

export default useGetJobsData;
