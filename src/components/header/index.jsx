import React from "react";
import { Link } from "react-router-dom";
import { visibleRoutes } from "../../configs/routes";

import CustomContainer from "../shared/custom-continer";

import { HeaderElm, Nav, Menu, MenuItem, Logo } from "./styles";

function Header(props) {
  console.log("pppprops", props);
  return (
    <HeaderElm>
      <CustomContainer>
        <Nav className="header__nav">
          {/* <img src={logoImg} /> */}
          <Link to={"/"}>
            <Logo>spaceX</Logo>
          </Link>
          <Menu>
            {visibleRoutes({ visibleIn: ["header"] }).map((route, index) => (
              <MenuItem key={index}>
                <Link to={route.path}>{route.title.toUpperCase()}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Nav>
      </CustomContainer>
    </HeaderElm>
  );
}

export default Header;
