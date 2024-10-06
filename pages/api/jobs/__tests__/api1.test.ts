import httpMocks from "node-mocks-http";
import handler, { API1_DELAY, mockJobs } from "../api1";
import { ApiResponse } from "@/types/api";
import { Job } from "@/types/Job";

describe("Jobs API Handler", () => {
  it("returns a list of jobs with status 200", async () => {
    const req = httpMocks.createRequest({
      method: "GET",
      query: {},
    });

    const res = httpMocks.createResponse();

    // Invoke the handler with the mocked request and response
    await handler(req, res);

    // Add a delay to wait for the response to settle
    await new Promise((resolve) => setTimeout(resolve, API1_DELAY));

    expect(res.statusCode).toBe(200);
    const data: ApiResponse<Job[]> = res._getJSONData();
    expect(data).toEqual({ data: mockJobs });
  });

  it("handles errors correctly", async () => {
    const req = httpMocks.createRequest({
      method: "GET",
      query: { error: "true" },
    });

    const res = httpMocks.createResponse();

    await handler(req, res);

    expect(res.statusCode).toBe(500);
    const data: ApiResponse<Job[]> = res._getJSONData();
    expect(data).toEqual({ error: "Internal Server Error" });
  });
});
