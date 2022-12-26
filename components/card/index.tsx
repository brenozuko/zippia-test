import { useState } from "react";

// TYPES
import { ICardProps } from "../../types/card";

// STYLES
import * as S from "./styles";

const Card = function ({
  job_title,
  job_description,
  company_name,
}: ICardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [buttonText, setButtonText] = useState("See More");

  const handleExpand = () => {
    console.log(isExpanded);
    setIsExpanded(!isExpanded);
    setButtonText(isExpanded ? "See More" : "See Less");
  };

  return (
    <S.Container>
      <S.Title>{job_title}</S.Title>
      <S.Company>{company_name}</S.Company>
      <S.Description
        isExpanded={isExpanded}
        dangerouslySetInnerHTML={{ __html: job_description }}
      />
      <S.SeeMore onClick={handleExpand}>{buttonText}</S.SeeMore>
    </S.Container>
  );
};

export default Card;
