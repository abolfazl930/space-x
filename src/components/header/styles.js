import styled from "styled-components";

export const HeaderElm = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  margin: 0 12px;
  display: flex;
  @media (min-width: 576px) {
    margin: 0 48px;
  }
`;
export const MenuItem = styled.li`
  margin: 0 8px;
  & a {
    font-size: 14px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.text.textColor1};
      text-decoration: none;
    }
  }
  @media (min-width: 576px) {
    margin: 0 12px;
    & a {
      font-size: 16px;
    }
  }
`;

export const Logo = styled.p`
  color: ${(props) => props.theme.text.textColor1};
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-size: 26px;
  @media (min-width: 576px) {
    font-size: ${(props) => props.theme.font.size.secondTitle};
  }
`;
