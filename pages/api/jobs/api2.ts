import type { NextApiRequest, NextApiResponse } from "next";
import { Job } from "@/types/Job";

const mockJobs: Job[] = [
  {
    id: "101",
    title: "Mobile App Developer",
    company: "AppMasters",
    location: "Austin, TX",
    description: "AppMasters is seeking a talented Mobile App Developer...",
    salary: "$90,000 - $130,000",
    postedDate: "2024-10-01",
    applicationUrl: "https://example.com/apply/101",
  },
  {
    id: "102",
    title: "Machine Learning Engineer",
    company: "DataPro",
    location: "London, UK",
    description: "Join DataPro's AI team as a Machine Learning Engineer...",
    salary: "$100,000 - $150,000",
    postedDate: "2024-09-29",
    applicationUrl: "https://example.com/apply/102",
  },
  {
    id: "103",
    title: "Cloud Architect",
    company: "CloudNet",
    location: "Remote",
    description:
      "CloudNet is looking for a Cloud Architect to design scalable solutions...",
    salary: "$110,000 - $160,000",
    postedDate: "2024-09-30",
    applicationUrl: "https://example.com/apply/103",
  },
  {
    id: "104",
    title: "Business Analyst",
    company: "FinanceFlow",
    location: "New York, NY",
    description:
      "We are looking for a Business Analyst to improve financial operations...",
    salary: "$85,000 - $105,000",
    postedDate: "2024-09-28",
    applicationUrl: "https://example.com/apply/104",
  },
  {
    id: "105",
    title: "Frontend Engineer",
    company: "InnovateX",
    location: "Berlin, Germany",
    description:
      "InnovateX is hiring a Frontend Engineer to build user-friendly applications...",
    salary: "€70,000 - €90,000",
    postedDate: "2024-09-27",
    applicationUrl: "https://example.com/apply/105",
  },
  {
    id: "106",
    title: "Cybersecurity Specialist",
    company: "SecureTech",
    location: "Toronto, Canada",
    description:
      "Join our team as a Cybersecurity Specialist to protect systems...",
    salary: "$95,000 - $125,000",
    postedDate: "2024-09-25",
    applicationUrl: "https://example.com/apply/106",
  },
  {
    id: "107",
    title: "UI/UX Designer",
    company: "DesignPro",
    location: "San Francisco, CA",
    description:
      "We are looking for a creative UI/UX Designer to enhance user experience...",
    salary: "$85,000 - $110,000",
    postedDate: "2024-09-26",
    applicationUrl: "https://example.com/apply/107",
  },
  {
    id: "108",
    title: "DevOps Engineer",
    company: "BuildOps",
    location: "Seattle, WA",
    description:
      "BuildOps is seeking a DevOps Engineer to manage infrastructure...",
    salary: "$100,000 - $140,000",
    postedDate: "2024-09-29",
    applicationUrl: "https://example.com/apply/108",
  },
  {
    id: "109",
    title: "Project Manager",
    company: "TechFlow",
    location: "Chicago, IL",
    description:
      "We are seeking an experienced Project Manager to lead IT projects...",
    salary: "$90,000 - $120,000",
    postedDate: "2024-09-28",
    applicationUrl: "https://example.com/apply/109",
  },
  {
    id: "110",
    title: "Systems Administrator",
    company: "NetSecure",
    location: "Remote",
    description:
      "Join NetSecure as a Systems Administrator to manage cloud infrastructure...",
    salary: "$85,000 - $115,000",
    postedDate: "2024-09-27",
    applicationUrl: "https://example.com/apply/110",
  },
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
