// TYPES
import { CardProps } from "../../types/card";

// STYLES
import * as S from "../../styles/card";

const Card = function ({
  job_title,
  job_description,
  company_name,
}: CardProps) {
  return (
    <S.Container>
      <S.Title>{job_title}</S.Title>
      <S.Company>{company_name}</S.Company>
      <S.Description dangerouslySetInnerHTML={{ __html: job_description }} />
    </S.Container>
  );
};

export default Card;
