import React from "react";
import { useTheme } from "theming";
import { useModalContext } from "../../hooks/use-modal-context";
import { Link } from "react-router-dom";

import CustomContainer from "../../components/shared/custom-continer";

import bgImg from "../../assets/images/main-bg.jpg";
import Title from "../../components/shared/title";

function Home(props) {
  // const modalInfo = useModalContext();
  // console.log("m", modalInfo);
  const theme = useTheme();
  console.log("theme", theme);
  return (
    <>
      <section className="main-page">
        <CustomContainer>
          <div className="test">
            <div className="main-page__text-box">
              <Title size="normal">RECENT LAUNCH</Title>
              <Title size="large">STARLINK MISSION</Title>
              <Link to={"/"}></Link>
            </div>
          </div>
        </CustomContainer>
      </section>
      <style jsx="true">
        {`
          .main-page {
            background-image: url(${bgImg});
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 100vh;
            padding-top: 100px;
            color: ${theme.color};
          }
          .test {
            position: relative;
            height: calc(100vh - 100px);
          }
          .main-page__text-box {
            position: absolute;
            bottom: 15%;
          }
        `}
      </style>
    </>
  );
}

export default Home;
