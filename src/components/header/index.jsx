import React from "react";
import { Link } from "react-router-dom";
import { visibleRoutes } from "../../configs/routes";
import { useTheme } from "theming";

import CustomContainer from "../shared/custom-continer";

import logoImg from "../../assets/images/logo.png";

function Header(props) {
  const theme = useTheme();
  return (
    <>
      <header className="header">
        <CustomContainer>
          <nav className="header__nav">
            {/* <img src={logoImg} /> */}
            <p className="header__nav__logo">spaceX</p>
            <ul className="header__nav__menu">
              {visibleRoutes({ visibleIn: ["header"] }).map((route, index) => (
                <li key={index} className="header__nav__menu__menu-item">
                  <Link
                    to={route.path}
                    className="header__nav__menu__menu-item__a"
                  >
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </CustomContainer>
      </header>
      <style jsx="true">
        {`
          .header {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
          }

          .header__nav {
            display: flex;
            align-items: center;
          }

          .header__nav__logo {
            color: ${theme.text.textColor1};
            font-weight: ${theme.font.weight.bold};
            font-size: ${theme.font.size.secondTitle};
          }

          .header__nav__menu {
            margin: 0 48px;
            display: flex;
          }

          .header__nav__menu__menu-item {
            margin: 0 12px;
          }

          .header__nav__menu__menu-item__a {
            font-size: 16px;
            font-weight: bold;
            color: white;
          }

          .header__nav__menu__menu-item__a:hover {
            color: white;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}

export default Header;
