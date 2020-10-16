import React from "react";
import { useModalContext } from "../../hooks/use-modal-context";
import { Link } from "react-router-dom";

import CustomContainer from "../../components/shared/custom-continer";

import {
  StyledPageWrapper,
  InnerContainer,
  TextBox,
  StyledTitle,
} from "./styles";
import Button from "../../components/shared/button";

function Home(props) {
  // const modalInfo = useModalContext();
  // console.log("m", modalInfo);
  return (
    <>
      <StyledPageWrapper>
        <CustomContainer>
          <InnerContainer>
            <TextBox>
              <StyledTitle size="normal">RECENT LAUNCH</StyledTitle>
              <StyledTitle size="large">STARLINK MISSION</StyledTitle>
              <Link to={"/lunches"}>
                <Button>watch</Button>
              </Link>
            </TextBox>
          </InnerContainer>
        </CustomContainer>
      </StyledPageWrapper>
    </>
  );
}

export default Home;
