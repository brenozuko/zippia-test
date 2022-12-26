export interface IRequestPayload {
  companySkills: boolean;
  dismissedListingHashes: string[];
  fetchJobDesc: boolean;
  titles: string[];
  locations: string[];
  numJobs: number;
  previousListingHashes: string[];
  postingDateRange?: string;
}

export interface IJobItem {
  jobId: string;
  jobTitle: string;
  companyName: string;
  jobDescription: string;
}

export interface IJobsList {
  list: IJobItem[];
}
