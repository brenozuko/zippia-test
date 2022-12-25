/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

// ICONS
import { BsGithub, BsLinkedin } from "react-icons/bs";

// COMPONENTS
const Card = dynamic(() => import("../../../components/card"), {
  ssr: false,
}); // This is strategy is required due to the fact that the html which

// STYLES
import * as S from "../../../styles/jobs";

//SERVICES
import { getJobs } from "../../../services/jobs";

// TYPES
import { IRequestPayload, IJobsList, IJobItem } from "../../../types/jobs";

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
    <>
      <S.Header>
        <img alt="Logo picture" src="/logo.png" />
      </S.Header>

      <S.Container>
        <S.Content>{renderCards()}</S.Content>
      </S.Container>

      <S.Footer>
        <p>Test realized by Breno Zukowski</p>
        <S.IconsContainer>
          <a
            href="https://www.linkedin.com/in/breno-zukowski-b873101a2/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin color="#fbfbfb" size={30} />
          </a>

          <a
            href="https://github.com/brenozuko"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub color="#fbfbfb" size={30} />
          </a>
        </S.IconsContainer>
      </S.Footer>
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
