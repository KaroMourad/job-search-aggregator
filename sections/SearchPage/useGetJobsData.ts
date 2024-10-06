import { handleError } from "@/lib/utils/handleError";
import { searchJobsApi } from "@/services/api/jobs/jobs";
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
      setLoading(true);
      setJobs([]);
      setError(null);
      try {
        const strUrlParams = new URLSearchParams({
          title,
          location,
        }).toString();
        const response = await searchJobsApi(strUrlParams);
        if (!response.ok) throw new Error("Failed to fetch jobs");
        const data: Job[] = await response.json();
        setJobs(data);
      } catch (error: unknown) {
        const err = handleError(error);
        setError(err.message);
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
