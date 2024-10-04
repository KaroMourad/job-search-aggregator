import type { NextApiRequest, NextApiResponse } from "next";
import { Job } from "@/types/Job";

const mockJobs: Job[] = [
  {
    id: "3",
    title: "Product Manager",
    company: "TechSoft",
    location: "San Francisco, CA",
    description: "TechSoft",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/3",
  },
  // Add more mock jobs here...
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job[]>
) {
  // Simulate a delayed response (exceeds timeout)
  setTimeout(() => {
    res.status(200).json(mockJobs);
  }, 3000);
}
