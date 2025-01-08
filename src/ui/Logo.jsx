import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: ${(props) => props.size || "4.6rem"};
  width: auto;
`;

function Logo({ size }) {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode
    ? "/logo-no-background.png"
    : "/logo-no-background.png";
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" size={size} />
    </StyledLogo>
  );
}

export default Logo;
