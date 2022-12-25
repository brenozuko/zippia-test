import styled from "styled-components";

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
