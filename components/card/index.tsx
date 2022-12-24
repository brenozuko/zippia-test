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
      <h2>{job_title}</h2>
      <p>{company_name}</p>
      <p dangerouslySetInnerHTML={{ __html: job_description }} />
    </S.Container>
  );
};

export default Card;
