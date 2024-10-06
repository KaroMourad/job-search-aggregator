import type { NextApiRequest, NextApiResponse } from "next";
import { Job } from "@/types/Job";
import { ApiResponse } from "@/types/api";

export const mockJobs: Job[] = [
  {
    id: "101",
    title: "Backend Developer",
    company: "AppMasters",
    location: "Austin, TX",
    description: "AppMasters is seeking a Backend Developer to build APIs",
    salary: "$90,000 - $130,000",
    postedDate: "2024-10-01",
    applicationUrl: "https://example.com/apply/101",
  },
  {
    id: "102",
    title: "Machine Learning Engineer",
    company: "DataPro",
    location: "London, UK",
    description: "Join DataPro's AI team as a Machine Learning Engineer",
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
      "CloudNet is looking for a Cloud Architect to design scalable solutions",
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
      "We are looking for a Business Analyst to improve financial operations",
    salary: "$85,000 - $105,000",
    postedDate: "2024-09-28",
    applicationUrl: "https://example.com/apply/104",
  },
  {
    id: "105",
    title: "Full Stack Engineer",
    company: "InnovateX",
    location: "Berlin, Germany",
    description:
      "InnovateX is hiring a Full Stack Engineer to build user-friendly applications",
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
      "Join our team as a Cybersecurity Specialist to protect systems",
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
      "We are looking for a creative UI/UX Designer to enhance user experience",
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
      "BuildOps is seeking a DevOps Engineer to manage infrastructure",
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
      "We are seeking an experienced Project Manager to lead IT projects",
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
      "Join NetSecure as a Systems Administrator to manage cloud infrastructure",
    salary: "$85,000 - $115,000",
    postedDate: "2024-09-27",
    applicationUrl: "https://example.com/apply/110",
  },
  {
    id: "111",
    title: "Data Scientist",
    company: "InsightAI",
    location: "San Francisco, CA",
    description:
      "InsightAI is seeking a Data Scientist to analyze large datasets",
    salary: "$110,000 - $140,000",
    postedDate: "2024-09-25",
    applicationUrl: "https://example.com/apply/111",
  },
  {
    id: "112",
    title: "Blockchain Developer",
    company: "CryptoTech",
    location: "Remote",
    description:
      "CryptoTech is looking for a Blockchain Developer to build decentralized apps",
    salary: "$120,000 - $160,000",
    postedDate: "2024-09-22",
    applicationUrl: "https://example.com/apply/112",
  },
  {
    id: "113",
    title: "IT Support Specialist",
    company: "HelpDeskPlus",
    location: "Chicago, IL",
    description:
      "We are looking for an IT Support Specialist to troubleshoot hardware and software issues",
    salary: "$55,000 - $75,000",
    postedDate: "2024-09-20",
    applicationUrl: "https://example.com/apply/113",
  },
  {
    id: "114",
    title: "AI Researcher",
    company: "DeepThink",
    location: "San Francisco, CA",
    description:
      "DeepThink is hiring an AI Researcher to explore advancements in machine learning",
    salary: "$140,000 - $180,000",
    postedDate: "2024-09-21",
    applicationUrl: "https://example.com/apply/114",
  },
  {
    id: "115",
    title: "Full Stack Engineer",
    company: "WebWorks",
    location: "Toronto, Canada",
    description:
      "WebWorks is seeking a Full Stack Engineer to enhance our web platforms",
    salary: "$90,000 - $120,000",
    postedDate: "2024-09-18",
    applicationUrl: "https://example.com/apply/115",
  },
  {
    id: "116",
    title: "HR Manager",
    company: "PeopleFirst",
    location: "New York, NY",
    description:
      "PeopleFirst is looking for an experienced HR Manager to oversee employee relations",
    salary: "$80,000 - $100,000",
    postedDate: "2024-09-24",
    applicationUrl: "https://example.com/apply/116",
  },
  {
    id: "117",
    title: "Mobile App Developer",
    company: "AppMasters",
    location: "Austin, TX",
    description: "AppMasters is seeking a talented Mobile App Developer",
    salary: "$90,000 - $130,000",
    postedDate: "2024-10-01",
    applicationUrl: "https://example.com/apply/117",
  },
  {
    id: "118",
    title: "Machine Learning Engineer",
    company: "DataPro",
    location: "London, UK",
    description: "Join DataPro's AI team as a Machine Learning Engineer",
    salary: "$100,000 - $150,000",
    postedDate: "2024-09-29",
    applicationUrl: "https://example.com/apply/118",
  },
  {
    id: "119",
    title: "Cloud Architect",
    company: "CloudNet",
    location: "Remote",
    description:
      "CloudNet is looking for a Cloud Architect to design scalable solutions",
    salary: "$110,000 - $160,000",
    postedDate: "2024-09-30",
    applicationUrl: "https://example.com/apply/119",
  },
  {
    id: "120",
    title: "Business Analyst",
    company: "FinanceFlow",
    location: "New York, NY",
    description:
      "We are looking for a Business Analyst to improve financial operations",
    salary: "$85,000 - $105,000",
    postedDate: "2024-09-28",
    applicationUrl: "https://example.com/apply/120",
  },
  {
    id: "121",
    title: "Full Stack Engineer",
    company: "InnovateX",
    location: "Remote",
    description:
      "InnovateX is hiring a Full Stack Engineer to build user-friendly applications",
    salary: "€70,000 - €90,000",
    postedDate: "2024-09-27",
    applicationUrl: "https://example.com/apply/121",
  },
];

export const API2_DELAY = 3000;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Job[]>>
) {
  const { error } = req.query;

  if (error === "true") {
    return res.status(500).json({ error: "Internal Server Error" });
  }

  setTimeout(() => {
    res.status(200).json({ data: mockJobs });
  }, API2_DELAY);
}
