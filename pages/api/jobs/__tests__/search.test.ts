import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../search';

// Mock job data
const mockJobData = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    description: 'We are looking for a skilled Frontend Developer.',
    salary: '$80,000 - $120,000',
    postedDate: '2024-09-15',
    applicationUrl: 'https://example.com/apply/1',
  },
  {
    id: '2',
    title: 'Backend Developer',
    company: 'DevSolutions',
    location: 'Onsite',
    description: 'Join our team as a Backend Developer.',
    salary: '$90,000 - $130,000',
    postedDate: '2024-09-16',
    applicationUrl: 'https://example.com/apply/2',
  },
];

// Mock the fetch function to simulate API responses
global.fetch = jest.fn((url) => {
  if (url.includes('/api/jobs/api1')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ data: mockJobData }),
    });
  } else if (url.includes('/api/jobs/api2')) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ data: [] }),
    });
  } else if (url.includes('/api/jobs/api3')) {
    return Promise.reject(new Error('API fetch failed'));
  }
}) as jest.Mock;

describe('Search API Handler', () => {
  it('filters job listings based on title', async () => {
    const req = {
      query: { title: 'Frontend', location: '' },
      headers: {
        "x-forwarded-proto": "http",
        host: "localhost:3000",
      }
    } as Partial<NextApiRequest>;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    await handler(req as NextApiRequest, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      {
        id: '1',
        title: 'Frontend Developer',
        company: 'TechCorp',
        location: 'Remote',
        description: 'We are looking for a skilled Frontend Developer.',
        salary: '$80,000 - $120,000',
        postedDate: '2024-09-15',
        applicationUrl: 'https://example.com/apply/1',
      },
    ]);
  });

  it('returns an empty array if no jobs match the filters', async () => {
    const req = {
      query: { title: 'Designer', location: '' },
      headers: {
        "x-forwarded-proto": "http",
        host: "localhost:3000",
      }
    } as Partial<NextApiRequest>;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    await handler(req as NextApiRequest, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([]);
  });

  it('handles fetch errors gracefully', async () => {
    const req = {
      query: { title: '', location: '' },
      headers: {
        "x-forwarded-proto": "http",
        host: "localhost:3000",
      }
    } as Partial<NextApiRequest>;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    await handler(req as NextApiRequest, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockJobData);
  });
});
