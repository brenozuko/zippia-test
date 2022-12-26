import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  max-width: 1140px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding: 0;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Header = styled.header`
  background: #2c2c2c;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    max-width: 160px;
    max-height: 40px;
  }
`;
