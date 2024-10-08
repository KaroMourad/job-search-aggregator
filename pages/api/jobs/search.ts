import {
  JOB_API_URLS,
  CACHE_SIZE,
  REQUEST_TIMEOUT_DELAY,
} from "@/lib/constants";
import {
  fetchWithTimeout,
  filterJobs,
  getRootUrl,
  paginate,
} from "@/lib/utils";
import LRUCache from "@/services/LRUCache";
import { Job } from "@/types/Job";
import { ApiResponse } from "@/types/api";
import { NextApiRequest, NextApiResponse } from "next";

const cache = new LRUCache<Job[]>(CACHE_SIZE);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { page, pageSize } = parsePaginatedQueryParams(req.query);
    const { title, location } = parseJobQueryParams(req.query);

    const cacheKey = LRUCache.generateKey({ title, location });

    if (cache.has(cacheKey)) {
      const cachedResults = cache.get(cacheKey)!;
      return res.status(200).json(paginate(cachedResults, page, pageSize));
    }

    // Fetch job listings from APIs
    const results = await fetchJobListings(req, { title, location });

    // Cache the filtered results
    cache.set(cacheKey, results);

    // Apply pagination to the filtered results
    const paginatedResults = paginate(results, page, pageSize);

    // Return paginated results
    res.status(200).json(paginatedResults);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch job listings" });
  }
}

// Function to parse query parameters
function parseJobQueryParams(query: NextApiRequest["query"]) {
  return {
    title: (query.title as string).toLowerCase() || "",
    location: (query.location as string).toLowerCase() || "",
  };
}

// Function to parse paginated query parameters
function parsePaginatedQueryParams(query: NextApiRequest["query"]) {
  return {
    page: Number(query.page) || 1,
    pageSize: Number(query.pageSize) || 10,
  };
}

// Function to fetch job listings
async function fetchJobListings(
  req: NextApiRequest,
  params: { title: string; location: string }
) {
  const { title, location } = params;
  const ROOT_URL = getRootUrl(req);

  const results = await Promise.allSettled(
    JOB_API_URLS.map((url) =>
      fetchWithTimeout<ApiResponse<Job[]>>(
        ROOT_URL + url,
        REQUEST_TIMEOUT_DELAY
      )
    )
  );

  const successfulResults = results
    .filter((result) => result.status === "fulfilled")
    .flatMap(
      (result) => (result as PromiseFulfilledResult<{ data: Job[] }>).value.data
    );

  // Filter results based on title and location
  return filterJobs(successfulResults, { title, location });
}
