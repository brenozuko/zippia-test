import styled, { css } from "styled-components";

// TYPES
import { DescriptionCardProps } from "../../types/card";

export const Container = styled.div`
  border-bottom: solid 1px #333;
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 325px;

  &:nth-child(1) {
    border-top: solid 1px #333;
  }

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

export const Description = styled.div<DescriptionCardProps>`
  ${({ isExpanded }) => css`
    color: #333;
    opacity: 0.8;
    overflow: hidden;
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
    height: ${isExpanded ? "100%" : "120px"};
  `}
`;

export const SeeMore = styled.button`
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: capitalize;
  background-color: #3174ee;
  color: #fff;
  font-size: 14px;
  width: 140px;
  height: 40px;
  text-align: center;
  margin-top: 15px;
`;
