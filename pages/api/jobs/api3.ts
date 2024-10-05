import type { NextApiRequest, NextApiResponse } from "next";
import { Job } from "@/types/Job";

const mockJobs: Job[] = [
  {
    id: "201",
    title: "Data Scientist",
    company: "InsightAI",
    location: "Boston, MA",
    description:
      "InsightAI is seeking a Data Scientist to analyze large datasets...",
    salary: "$110,000 - $140,000",
    postedDate: "2024-09-25",
    applicationUrl: "https://example.com/apply/201",
  },
  {
    id: "202",
    title: "Blockchain Developer",
    company: "CryptoTech",
    location: "Remote",
    description:
      "CryptoTech is looking for a Blockchain Developer to build decentralized apps...",
    salary: "$120,000 - $160,000",
    postedDate: "2024-09-22",
    applicationUrl: "https://example.com/apply/202",
  },
  {
    id: "203",
    title: "IT Support Specialist",
    company: "HelpDeskPlus",
    location: "Chicago, IL",
    description:
      "We are looking for an IT Support Specialist to troubleshoot hardware and software issues...",
    salary: "$55,000 - $75,000",
    postedDate: "2024-09-20",
    applicationUrl: "https://example.com/apply/203",
  },
  {
    id: "204",
    title: "AI Researcher",
    company: "DeepThink",
    location: "San Francisco, CA",
    description:
      "DeepThink is hiring an AI Researcher to explore advancements in machine learning...",
    salary: "$140,000 - $180,000",
    postedDate: "2024-09-21",
    applicationUrl: "https://example.com/apply/204",
  },
  {
    id: "205",
    title: "Frontend Engineer",
    company: "WebWorks",
    location: "Toronto, Canada",
    description:
      "WebWorks is seeking a Frontend Engineer to enhance our web platforms...",
    salary: "$90,000 - $120,000",
    postedDate: "2024-09-18",
    applicationUrl: "https://example.com/apply/205",
  },
  {
    id: "206",
    title: "HR Manager",
    company: "PeopleFirst",
    location: "New York, NY",
    description:
      "PeopleFirst is looking for an experienced HR Manager to oversee employee relations...",
    salary: "$80,000 - $100,000",
    postedDate: "2024-09-24",
    applicationUrl: "https://example.com/apply/206",
  },
  {
    id: "207",
    title: "Software Architect",
    company: "BuildWise",
    location: "Berlin, Germany",
    description:
      "Join BuildWise as a Software Architect to design scalable enterprise solutions...",
    salary: "€100,000 - €130,000",
    postedDate: "2024-09-23",
    applicationUrl: "https://example.com/apply/207",
  },
  {
    id: "208",
    title: "Graphic Designer",
    company: "CreativeLabs",
    location: "Los Angeles, CA",
    description:
      "We are seeking a creative Graphic Designer to produce visual content for our marketing team...",
    salary: "$60,000 - $85,000",
    postedDate: "2024-09-19",
    applicationUrl: "https://example.com/apply/208",
  },
  {
    id: "209",
    title: "Network Engineer",
    company: "NetWorks",
    location: "Dallas, TX",
    description:
      "NetWorks is hiring a Network Engineer to manage our internal networks...",
    salary: "$95,000 - $120,000",
    postedDate: "2024-09-22",
    applicationUrl: "https://example.com/apply/209",
  },
  {
    id: "210",
    title: "SEO Specialist",
    company: "WebRank",
    location: "Remote",
    description:
      "WebRank is looking for an SEO Specialist to optimize content and improve rankings...",
    salary: "$65,000 - $90,000",
    postedDate: "2024-09-20",
    applicationUrl: "https://example.com/apply/210",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job[]>
) {
  // Simulate a delayed response (exceeds timeout)
  setTimeout(() => {
    res.status(200).json(mockJobs);
  }, 2000);
}
