import { INITIAL_PAGE, INITIAL_PAGE_SIZE } from "@/lib/constants";
import { PaginatedResult } from "@/lib/utils";
import { FetchJobsParams, Job } from "@/types/Job";

const API = "api";
const JOBS = {
  BASE: "jobs",
  SEARCH: "search",
};

/**
 * Search jobs from the API
 * @param {string} strUrlParams - URL params
 * @returns Promise<Response>
 */
export function searchJobsApi(strUrlParams: string): Promise<Response> {
  return fetch(`/${API}/${JOBS.BASE}/${JOBS.SEARCH}?${strUrlParams}`);
}

export async function fetchJobs({
  title,
  location,
  page = INITIAL_PAGE,
  pageSize = INITIAL_PAGE_SIZE,
}: FetchJobsParams): Promise<PaginatedResult<Job>> {
  const strUrlParams = new URLSearchParams({
    title,
    location,
    page: page.toString(),
    pageSize: pageSize.toString(),
  }).toString();

  const response = await searchJobsApi(strUrlParams);
  if (!response.ok) throw new Error("Failed to fetch jobs");
  const data = await response.json();
  return data;
}
