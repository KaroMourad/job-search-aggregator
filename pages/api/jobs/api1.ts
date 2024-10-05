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
  {
    id: "2",
    title: "Full Stack Developer",
    company: "TechSoft",
    location: "Yerevan, Armenia",
    description: "TechSoft is looking for a Full Stack Developer...",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/2",
  },
  {
    id: "3",
    title: "Product Manager",
    company: "TechSoft",
    location: "San Francisco, CA",
    description: "TechSoft is looking for a Product Manager...",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/3",
  },
  {
    id: "4",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "New York, NY",
    description: "Seeking an experienced Backend Engineer to join our team...",
    postedDate: "2024-09-14",
    applicationUrl: "https://example.com/apply/4",
  },
  {
    id: "5",
    title: "Software Engineer",
    company: "TechSoft",
    location: "Remote",
    description: "TechSoft is looking for a Software Engineer...",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/5",
  },
  {
    id: "6",
    title: "Data Analyst",
    company: "DataSystems",
    location: "San Francisco, CA",
    description: "DataSystems is looking for a Data Analyst...",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/6",
  },
  {
    id: "7",
    title: "UX Designer",
    company: "TechCorp",
    location: "Remote",
    description: "TechCorp is looking for a UX Designer...",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/7",
  },
  {
    id: "8",
    title: "QA Engineer",
    company: "TechSoft",
    location: "Yerevan, Armenia",
    description: "TechSoft is looking for a QA Engineer...",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/8",
  },
  {
    id: "9",
    title: "DevOps Engineer",
    company: "DataSystems",
    location: "New York, NY",
    description: "DataSystems is looking for a DevOps Engineer...",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/9",
  },
  {
    id: "10",
    title: "Technical Writer",
    company: "TechCorp",
    location: "Remote",
    description: "TechCorp is looking for a Technical Writer...",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/10",
  },
  {
    id: "11",
    title: "Security Analyst",
    company: "TechSoft",
    location: "Yerevan, Armenia",
    description: "TechSoft is looking for a Security Analyst...",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/11",
  }
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
