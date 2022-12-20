import styled from "styled-components";

export const ContainerTest = styled.div`
  border-radius: 10px;

  &:after {
    content: "";
    width: 300px;
    background-color: red;
    height: 300px;
  }
`;
