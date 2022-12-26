import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

// COMPONENTS
const Card = dynamic(() => import("../../../components/card"), {
  ssr: false,
}); // This is strategy is required due to the fact that the html which

import Footer from "../../../components/footer";

import Sidebar from "../../../components/sidebar";

// STYLES
import * as S from "../../../styles/jobs";

//SERVICES
import { getJobs } from "../../../services/jobs";

// TYPES
import { IRequestPayload, IJobsList, IJobItem } from "../../../types/jobs";

export default function Jobs({ list }: IJobsList) {
  const [data, setData] = useState(list);

  const renderCards = () => {
    return data.map((job) => (
      <Card
        key={job.jobId}
        job_id={job.jobId}
        job_title={job.jobTitle}
        job_description={job.jobDescription}
        company_name={job.companyName}
      />
    ));
  };

  const handleSevenDays = async () => {
    const requestParameters: IRequestPayload = {
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      titles: ["Business Analyst"],
      locations: [],
      numJobs: 10,
      postingDateRange: "30d",
      previousListingHashes: [],
    };

    const jobsResponse = await getJobs(requestParameters);
    const jobsData: IJobItem[] = await jobsResponse!.data.jobs;

    setData(jobsData);
  };

  const handleCompanyName = () => {};

  return (
    <>
      <S.Header>
        <img alt="Logo picture" src="/logo.png" />
      </S.Header>

      <S.Container>
        <Sidebar
          handleSevenDays={handleSevenDays}
          handleCompanyName={handleCompanyName}
        />
        <div>{renderCards()}</div>
      </S.Container>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const requestParameters: IRequestPayload = {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    titles: ["Business Analyst"],
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
