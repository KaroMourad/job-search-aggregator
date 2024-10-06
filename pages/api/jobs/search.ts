import { API_URLS } from "@/lib/constants";
import { fetchWithTimeout } from "@/lib/utils/fetchWithTimeout";
import { filterJobs } from "@/lib/utils/filterJobs";
import { getRootUrl } from "@/lib/utils/getRootUrl";
import CacheMap from "@/services/CacheMap";
import { Job } from "@/types/Job";
import { ApiResponse } from "@/types/api";
import { NextApiRequest, NextApiResponse } from "next";

const cache = new CacheMap<Job[]>();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, location } = req.query as {
    title: string;
    location: string;
  };
  const cacheKey = CacheMap.generateKey({
    title: title.toLowerCase(),
    location: location.toLowerCase(),
  });

  if (cache.has(cacheKey)) {
    return res.status(200).json(cache.get(cacheKey));
  }

  const ROOT_URL = getRootUrl(req);
  const timeout = 2000;

  try {
    const results = await Promise.allSettled(
      API_URLS.map((url) =>
        fetchWithTimeout<ApiResponse<Job[]>>(ROOT_URL + url, timeout)
      )
    );

    let successfulResults = results
      .filter((result) => result.status === "fulfilled")
      .map(
        (result) =>
          (result as PromiseFulfilledResult<{ data: Job[] }>).value.data
      )
      .flat();

    successfulResults = filterJobs(successfulResults, {
      title: title as string,
      location: location as string,
    });

    cache.set(cacheKey, successfulResults);

    res.status(200).json(successfulResults);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch job listings" });
  }
}
