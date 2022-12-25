import styled from "styled-components";

export const Container = styled.div`
  border-bottom: solid 1px #333;
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 370px;

  @media (min-width: 768px) {
    max-width: 700px;
  }
`;

export const Title = styled.h2`
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Company = styled.h3`
  color: #756666;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  max-width: 280px;
  overflow: hidden;
`;

export const Description = styled.p`
  color: #333;
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
  max-height: 72px;
`;
