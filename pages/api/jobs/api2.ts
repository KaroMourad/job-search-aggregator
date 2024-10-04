import type { NextApiRequest, NextApiResponse } from 'next'
import { Job } from '@/types/Job'

const mockJobs: Job[] = [
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'DataSystems',
    location: 'New York, NY',
    description: 'Seeking an experienced Backend Engineer to join our team...',
    postedDate: '2024-09-14',
    applicationUrl: 'https://example.com/apply/2'
  },
  // Add more mock jobs here...
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job[]>
) {
  // Simulate a delayed response (exceeds timeout)
  setTimeout(() => {
    res.status(200).json(mockJobs)
  }, 3000)
}
