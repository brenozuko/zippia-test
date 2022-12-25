import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  max-width: 1140px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding: 0;
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

export const Content = styled.div``;

export const Footer = styled.footer`
  background: #2c2c2c;
  border-radius: 0;
  min-height: 80px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
    max-width: 250px;
    font-size: 14px;
  }
`;

export const IconsContainer = styled.div`
  margin-top: 10px;

  a {
    margin-right: 10px;
  }
`;
