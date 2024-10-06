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
