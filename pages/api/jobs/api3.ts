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
    title: "Full Stack Engineer",
    company: "WebWorks",
    location: "Toronto, Canada",
    description:
      "WebWorks is seeking a Full Stack Engineer to enhance our web platforms...",
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
  {
    id: "211",
    title: "DevOps Engineer",
    company: "CloudOps",
    location: "Austin, TX",
    description:
      "CloudOps is seeking a DevOps Engineer to automate deployment pipelines...",
    salary: "$100,000 - $130,000",
    postedDate: "2024-09-21",
    applicationUrl: "https://example.com/apply/211",
  },
  {
    id: "212",
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Remote",
    description:
      "AppWorks is looking for a Mobile Developer to build cross-platform apps...",
    salary: "$80,000 - $110,000",
    postedDate: "2024-09-17",
    applicationUrl: "https://example.com/apply/212",
  },
  {
    id: "213",
    title: "IT Project Manager",
    company: "TechPro",
    location: "San Francisco, CA",
    description:
      "TechPro is looking for an IT Project Manager to lead software development projects...",
    salary: "$90,000 - $120,000",
    postedDate: "2024-09-16",
    applicationUrl: "https://example.com/apply/213",
  },
  {
    id: "214",
    title: "Quality Assurance Analyst",
    company: "TestPros",
    location: "Remote",
    description:
      "TestPros is seeking a Quality Assurance Analyst to test software applications...",
    salary: "$70,000 - $90,000",
    postedDate: "2024-09-15",
    applicationUrl: "https://example.com/apply/214",
  },
  {
    id: "215",
    title: "UX Designer",
    company: "DesignWorks",
    location: "Los Angeles, CA",
    description:
      "DesignWorks is looking for a UX Designer to create intuitive user experiences...",
    salary: "$85,000 - $110,000",
    postedDate: "2024-09-14",
    applicationUrl: "https://example.com/apply/215",
  },
  {
    id: "216",
    title: "Business Analyst",
    company: "DataInsights",
    location: "New York, NY",
    description:
      "DataInsights is looking for a Business Analyst to analyze data and generate insights...",
    salary: "$75,000 - $95,000",
    postedDate: "2024-09-13",
    applicationUrl: "https://example.com/apply/216",
  },
  {
    id: "217",
    title: "Systems Administrator",
    company: "SysAdmins",
    location: "Chicago, IL",
    description:
      "SysAdmins is hiring a Systems Administrator to manage IT infrastructure...",
    salary: "$70,000 - $90,000",
    postedDate: "2024-09-12",
    applicationUrl: "https://example.com/apply/217",
  },
  {
    id: "218",
    title: "Technical Writer",
    company: "WriteTech",
    location: "Remote",
    description:
      "WriteTech is seeking a Technical Writer to create documentation and guides...",
    salary: "$60,000 - $80,000",
    postedDate: "2024-09-11",
    applicationUrl: "https://example.com/apply/218",
  },
  {
    id: "219",
    title: "Product Manager",
    company: "ProductX",
    location: "San Francisco, CA",
    description:
      "ProductX is looking for a Product Manager to oversee product development...",
    salary: "$100,000 - $130,000",
    postedDate: "2024-09-10",
    applicationUrl: "https://example.com/apply/219",
  },
  {
    id: "220",
    title: "Data Analyst",
    company: "DataWorks",
    location: "Los Angeles, CA",
    description:
      "DataWorks is seeking a Data Analyst to analyze data and generate reports...",
    salary: "$65,000 - $85,000",
    postedDate: "2024-09-09",
    applicationUrl: "https://example.com/apply/220",
  },
  {
    id: "221",
    title: "Full Stack Developer",
    company: "CodeWorks",
    location: "Remote",
    description:
      "CodeWorks is looking for a Full Stack Developer to build web applications...",
    salary: "$90,000 - $120,000",
    postedDate: "2024-09-08",
    applicationUrl: "https://example.com/apply/221",
  },
  {
    id: "222",
    title: "Cloud Architect",
    company: "CloudWorks",
    location: "Austin, TX",
    description:
      "CloudWorks is seeking a Cloud Architect to design cloud infrastructure...",
    salary: "$110,000 - $140,000",
    postedDate: "2024-09-07",
    applicationUrl: "https://example.com/apply/222",
  },
  {
    id: "223",
    title: "UX Researcher",
    company: "ResearchLabs",
    location: "Boston, MA",
    description:
      "ResearchLabs is looking for a UX Researcher to conduct user research...",
    salary: "$80,000 - $100,000",
    postedDate: "2024-09-06",
    applicationUrl: "https://example.com/apply/223",
  },
  {
    id: "224",
    title: "Full Stack Engineer",
    company: "SecureNet",
    location: "Remote",
    description:
      "SecureNet is looking for a Full Stack Engineer to develop web applications...",
    salary: "$100,000 - $130,000",
    postedDate: "2024-09-05",
    applicationUrl: "https://example.com/apply/224",
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
