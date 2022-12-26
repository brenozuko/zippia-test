import axios from "axios";

// TYPES
import { IRequestPayload } from "../../types/jobs";

const BASE_URL = "https://www.zippia.com/api/getJobsFromSearchAPI";

export const getJobs = async (requestPayload: IRequestPayload) => {
  try {
    return axios.post(BASE_URL, requestPayload);
  } catch (error) {
    console.log(error);
  }
};
