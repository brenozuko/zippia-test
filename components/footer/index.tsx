// ICONS
import { BsGithub, BsLinkedin } from "react-icons/bs";

// STYLES
import * as S from "./styles";

const Footer = function () {
  return (
    <S.Footer>
      <p>Test developed by Breno Zukowski</p>
      <S.IconsContainer>
        <a
          href="https://www.linkedin.com/in/breno-zukowski-b873101a2/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin color="#fbfbfb" size={30} />
        </a>

        <a href="https://github.com/brenozuko" target="_blank" rel="noreferrer">
          <BsGithub color="#fbfbfb" size={30} />
        </a>
      </S.IconsContainer>
    </S.Footer>
  );
};

export default Footer;
