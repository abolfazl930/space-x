import React from "react";
import CustomContainer from "../../components/shared/custom-continer";
import ArrowDownIcon from "../../components/shared/svg/arrow-down";
import Title from "../../components/shared/title";
import { ModalActions } from "../../context/actions/modal-actions";
import { StyledPageWrapper, TextBox, StyledTitle, ArrowHolder } from "./styles";

function AboutUs(props) {
  //   console.log(ModalActions());
  // const { dispatchOpenModal } = ModalActions();
  // const test = () => {
  //   dispatchOpenModal();
  // };
  return (
    <>
      <StyledPageWrapper className="d-flex justify-content-center align-items-center">
        <TextBox className="d-flex flex-column justify-content-center align-items-center">
          <StyledTitle size="xLarge">Falcon Heavy</StyledTitle>
          <Title size="medium">The world’s most powerful rocket</Title>
        </TextBox>
        <ArrowHolder className="d-flex justify-content-center align-items-center">
          <ArrowDownIcon width="30px" fill="#000" />
        </ArrowHolder>
      </StyledPageWrapper>
      ssssssssssss
    </>
  );
}

export default AboutUs;
