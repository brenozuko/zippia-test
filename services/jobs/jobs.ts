import axios from "axios";

// TYPES
import { IRequestPayload } from "../../types/jobs";

const BASE_URL = "https://www.zippia.com/api/jobs/";

export const getJobs = async (requestPayload: IRequestPayload) => {
  try {
    return axios.post(BASE_URL, requestPayload);
  } catch (error) {
    console.log(error);
  }
};
