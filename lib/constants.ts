// Description: Constants used in the application.

// Set the API URLs to fetch the data from the server
export const JOB_API_URLS = ["/api/jobs/api1", "/api/jobs/api2", "/api/jobs/api3"];

// Set the cache size to limit the number of items stored in the cache
export const CACHE_SIZE = 100;

// Set a timeout for the request using the AbortController signal for cancellation,
// to not wait for the request to complete if it takes too long to respond
export const REQUEST_TIMEOUT_DELAY = 2000;

// Set the initial page for the pagination
export const INITIAL_PAGE = "1";

// Set the initial page size for the pagination
export const INITIAL_PAGE_SIZE = "10";