import React from "react";
import Lottie from "react-lottie";
import animationData from "./data.json";

const Spinner = ({ size }) => {
  const _size = size || 80;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} width={_size} height={_size} />;
};

export default Spinner;
