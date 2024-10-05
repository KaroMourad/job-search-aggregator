// pages/api/search.ts
import { handleError } from "@/lib/utils";
import { Job } from "@/types/Job";
import { NextApiRequest, NextApiResponse } from "next";

const ROOT_URL = process.env.URL || "http://localhost:3000";
const API_URLS = ["/api/jobs/api1", "/api/jobs/api2", "/api/jobs/api3"];

async function fetchWithTimeout<T>(url: string, timeout: number): Promise<T> {
  const controller = new AbortController();
  const { signal } = controller;

  // Set a timeout to abort the fetch request
  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(ROOT_URL + url, { signal });
    if (!response.ok) {
      throw new Error(`Failed to fetch from ${url}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    const err = handleError(error);
    if (err.name === "AbortError") {
      throw new Error(`Fetch timed out after ${timeout} ms`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, location } = req.query;
  const timeout = 2000;

  try {
    const results = await Promise.allSettled(
      API_URLS.map((url) => fetchWithTimeout<Job[]>(url, timeout))
    );

    let successfulResults = results
      .filter((result) => result.status === "fulfilled")
      .map((result) => (result as PromiseFulfilledResult<Job[]>).value)
      .flat();

    successfulResults = filterJobs<Job>(successfulResults, {
      title: title as string,
      location: location as string,
    });

    res.status(200).json(successfulResults);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch job listings" });
  }
}

function filterJobs<T>(items: T[], filters: Record<string, string>): T[] {
  return items.filter((item) => {
    return Object.keys(filters).every((key) => {
      const filterValue = filters[key];
      if (!filterValue) return true;

      const itemValue = item[key as keyof T];
      return (
        itemValue &&
        itemValue.toString().toLowerCase().includes(filterValue.toLowerCase())
      );
    });
  });
}
