export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  salary?: string;
  postedDate: string;
  applicationUrl: string;
}

export interface FetchJobsParams {
  title: string;
  location: string;
  page?: number | string;
  pageSize?: number | string;
}

