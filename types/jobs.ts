export interface IRequestPayload {
  companySkills: boolean;
  dismissedListingHashes: string[];
  fetchJobDesc: boolean;
  jobTitle: string;
  locations: string[];
  numJobs: number;
  previousListingHashes: string[];
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
