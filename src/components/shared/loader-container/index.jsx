import React from "react";
import Spinner from "../spinner";
import styled from "styled-components";

const LoaderContainer = (props) => {
  const { isLoading, size } = props;
  return (
    isLoading && (
      <Container>
        <Spinner size={size} />;
      </Container>
    )
  );
};

const Container = styled.div`
  position: absolute;
  backdrop-filter: blur(25px);
  width: 100%;
  height: 100%;
  z-index: 1000;
  left: 0;
`;

export default LoaderContainer;
