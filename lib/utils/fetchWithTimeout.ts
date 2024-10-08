import { adaptError } from ".";

/**
 * Fetch data from a URL with a timeout
 * @param url The URL to fetch data from
 * @param timeout The timeout in milliseconds
 * @returns The fetched data
 */
export default async function fetchWithTimeout<T>(url: string, timeout: number): Promise<T> {
  const controller = new AbortController();
  const { signal } = controller;

  // Set a timeout for the request using the AbortController signal for cancellation,
  // to not wait for the request to complete if it takes too long to respond
  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, { signal });
    if (!response.ok) {
      throw new Error(`Failed to fetch from ${url}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    const err = adaptError(error);
    if (err.name === "AbortError") {
      throw new Error(`Fetch timed out after ${timeout} ms`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}
