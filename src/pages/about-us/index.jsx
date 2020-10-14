import React from "react";
import { ModalActions } from "../../context/actions/modal-actions";
function AboutUs(props) {
  //   console.log(ModalActions());
  const { dispatchOpenModal } = ModalActions();
  const test = () => {
    dispatchOpenModal();
  };
  return <div onClick={test}>about us</div>;
}

export default AboutUs;
