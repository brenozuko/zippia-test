import axios from "axios";

const BASE_URL = "https://www.zippia.com/api/jobs/";

interface IRequestPayload {
  companySkills: boolean;
  dismissedListingHashes: string[];
  fetchJobDesc: boolean;
  jobTitle: string;
  locations: string[];
  numJobs: number;
  previousListingHashes: string[];
}

export const getJobs = async (requestPayload: IRequestPayload) => {
  try {
    return axios.post(BASE_URL, requestPayload);
  } catch (error) {
    console.log(error);
  }
};
