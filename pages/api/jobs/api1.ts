import type { NextApiRequest, NextApiResponse } from "next";
import { Job } from "@/types/Job";

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    description: "We are looking for a skilled Frontend Developer...",
    salary: "$80,000 - $120,000",
    postedDate: "2024-09-15",
    applicationUrl: "https://example.com/apply/1",
  },
  // Add more mock jobs here...
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job[]>
) {
  // Simulate a quick response (within timeout)
  setTimeout(() => {
    res.status(200).json(mockJobs);
  }, 1000);
}
