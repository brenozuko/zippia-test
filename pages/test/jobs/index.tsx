import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// COMPONENTS

// This is strategy is required due to the fact that the html which 
const Card = dynamic(() => import("../../../components/card"), {
  ssr: false,
});

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
  const renderCards = () => {
    return list.map((job) => (
      <Card
        key={job.jobId}
        job_id={job.jobId}
        job_title={job.jobTitle}
        job_description={job.jobDescription}
        company_name={job.companyName}
      />
    ));
  };

  return (
    <S.Container>
      <S.Header></S.Header>

      <S.Content>{renderCards()}</S.Content>

      <S.Footer></S.Footer>
    </S.Container>
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
