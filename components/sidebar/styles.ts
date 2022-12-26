import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 20px;
  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 35px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  align-items: center;
  background: #f0f2f4;
  border-radius: 21.5px;
  color: #7d878f;
  cursor: pointer;
  display: flex;
  font-size: 13px;
  font-weight: 600;
  line-height: 2.06;
  max-width: 240px;
  padding: 4px 8px;
  position: relative;
  transition: all 0.3s ease-in-out;
  margin-right: 10px;
`;
