import { GetServerSideProps } from "next";
import { GetStaticProps } from "next";

import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

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
  const [data, setData] = useState<IJobItem[]>([]);

  useEffect(() => {
    setData(list);
  }, []);

  return (
    <>
      <S.ContainerTest>teste</S.ContainerTest>
      {data.map((job) => (
        <div key={job.jobId}>
          <h2>{job.jobTitle}</h2>
          <section>
            <p>{job.companyName}</p>
            <p dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
          </section>
        </div>
      ))}
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
