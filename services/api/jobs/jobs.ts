import { Job } from "@/types/Job";
import { SearchJobsParams } from "./jobs.types";

const API = "api";
const JOBS = {
  BASE: "jobs",
  SEARCH: "search",
};

export function searchJobsApi(
  params: SearchJobsParams
): Promise<Response> {
  const strUrlParams = new URLSearchParams({
    title: params.title,
    location: params.location,
  }).toString();
  return fetch(`/${API}/${JOBS.BASE}/${JOBS.SEARCH}?${strUrlParams}`);
}
