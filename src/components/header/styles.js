import styled from "styled-components";

export const HeaderElm = styled.header`
  position: fixed;
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
  margin: 0 48px;
  display: flex;
`;
export const MenuItem = styled.li`
  margin: 0 12px;
  & a {
    font-size: 16px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.text.textColor1};
      text-decoration: none;
    }
  }
`;

export const Logo = styled.p`
  color: ${(props) => props.theme.text.textColor1};
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-size: ${(props) => props.theme.font.size.secondTitle};
`;
