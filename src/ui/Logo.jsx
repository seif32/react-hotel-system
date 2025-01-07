import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: ${(props) => props.size || "4.6rem"};
  width: auto;
`;

function Logo({ size }) {
  return (
    <StyledLogo>
      <Img src="/logo-no-background.png" alt="Logo" size={size} />
    </StyledLogo>
  );
}

export default Logo;
