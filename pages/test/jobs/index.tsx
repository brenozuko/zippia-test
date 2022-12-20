import { GetServerSideProps } from "next";
import { AxiosResponse } from "axios";

// STYLES
import * as S from "../../../styles/jobs";

//SERVICES
import { getJobs, IRequestPayload } from "../../../services/jobs";

interface IJobItem {
  jobId: string;
  jobTitle: string;
  companyName: string;
  jobDescription: string;
}

interface IJobsList {
  list: IJobItem[];
}

export default function Jobs({ list }: IJobsList) {
  console.log("the list is ", list);
  return (
    <>
      <div>Teste </div>
      <S.ContainerTest>teste</S.ContainerTest>
      {list.map((job) => <div key={job.jobId}>{job.jobTitle}</div>)}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const requestParameters: IRequestPayload = {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: "Business Analyst",
    locations: [],
    numJobs: 10,
    previousListingHashes: [],
  };

  const jobsResponse = await getJobs(requestParameters);
  const jobsData: IJobItem[] = await jobsResponse!.data.jobs;

  return {
    props: {
      list: jobsData,
    }, // will be passed to the page component as props
  };
};
