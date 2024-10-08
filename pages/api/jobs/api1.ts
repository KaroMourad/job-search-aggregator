import type { NextApiRequest, NextApiResponse } from "next";
import { Job } from "@/types/Job";
import { ApiResponse } from "@/types/api";

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    description:
      "We are looking for a skilled Frontend Developer to join our team in a remote capacity and help us build user-friendly web applications",
    salary: "$80,000 - $120,000",
    postedDate: "2024-09-15",
    applicationUrl: "https://example.com/apply/1",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "TechSoft",
    location: "Yerevan, Armenia",
    description: "TechSoft is looking for a Full Stack Developer",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/2",
  },
  {
    id: "3",
    title: "Product Manager",
    company: "TechSoft",
    location: "San Francisco, CA",
    description: "TechSoft is looking for a Product Manager",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/3",
  },
  {
    id: "4",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "New York, NY",
    description: "Seeking an experienced Backend Engineer to join our team",
    postedDate: "2024-09-14",
    applicationUrl: "https://example.com/apply/4",
  },
  {
    id: "5",
    title: "Software Engineer",
    company: "TechSoft",
    location: "Remote",
    description: "TechSoft is looking for a Software Engineer",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/5",
  },
  {
    id: "6",
    title: "Data Analyst",
    company: "DataSystems",
    location: "San Francisco, CA",
    description: "DataSystems is looking for a Data Analyst",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/6",
  },
  {
    id: "7",
    title: "UX Designer",
    company: "TechCorp",
    location: "Remote",
    description: "TechCorp is looking for a UX Designer",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/7",
  },
  {
    id: "8",
    title: "QA Engineer",
    company: "TechSoft",
    location: "Yerevan, Armenia",
    description: "TechSoft is looking for a QA Engineer",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/8",
  },
  {
    id: "9",
    title: "DevOps Engineer",
    company: "DataSystems",
    location: "New York, NY",
    description: "DataSystems is looking for a DevOps Engineer",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/9",
  },
  {
    id: "10",
    title: "Technical Writer",
    company: "TechCorp",
    location: "Remote",
    description: "TechCorp is looking for a Technical Writer",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/10",
  },
  {
    id: "11",
    title: "Security Analyst",
    company: "TechSoft",
    location: "Yerevan, Armenia",
    description: "TechSoft is looking for a Security Analyst",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/11",
  },
  {
    id: "12",
    title: "IT Support Specialist",
    company: "DataSystems",
    location: "New York, NY",
    description: "DataSystems is looking for an IT Support Specialist",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/12",
  },
  {
    id: "13",
    title: "Network Engineer",
    company: "TechSoft",
    location: "Yerevan, Armenia",
    description: "TechSoft is looking for a Network Engineer",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/13",
  },
  {
    id: "14",
    title: "Database Administrator",
    company: "DataSystems",
    location: "New York, NY",
    description: "DataSystems is looking for a Database Administrator",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/14",
  },
  {
    id: "15",
    title: "Technical Support Engineer",
    company: "TechCorp",
    location: "Remote",
    description: "TechCorp is looking for a Technical Support Engineer",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/15",
  },
  {
    id: "16",
    title: "Systems Analyst",
    company: "TechSoft",
    location: "Yerevan, Armenia",
    description: "TechSoft is looking for a Systems Analyst",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/16",
  },
  {
    id: "17",
    title: "Business Intelligence Analyst",
    company: "DataSystems",
    location: "New York, NY",
    description: "DataSystems is looking for a Business Intelligence Analyst",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/17",
  },
  {
    id: "18",
    title: "IT Manager",
    company: "TechSoft",
    location: "Yerevan, Armenia",
    description: "TechSoft is looking for an IT Manager",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/18",
  },
  {
    id: "19",
    title: "Software Architect",
    company: "DataSystems",
    location: "New York, NY",
    description: "DataSystems is looking for a Software Architect",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/19",
  },
  {
    id: "20",
    title: "Product Owner",
    company: "TechCorp",
    location: "Remote",
    description: "TechCorp is looking for a Product Owner",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/20",
  },
];

export const API1_DELAY = 1000;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Job[]>>
) {
  const { error } = req.query;

  if (error === 'true') {
    return res.status(500).json({ error: 'Internal Server Error',  });
  }

  setTimeout(() => {
    res.status(200).json({ data: mockJobs });
  }, API1_DELAY);
}
