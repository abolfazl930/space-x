import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomContainer from "../../components/shared/custom-continer";

import LoaderContainer from "../../components/shared/loader-container";
import services from "../../services";

import {
  StyledFullPageWrapper,
  TextBox,
  StyledTitle,
  InnerPage,
  DetaliSection,
  TextHolder,
  Text,
} from "./styles";

function Inner(props) {
  let { slug } = useParams();

  const [launch, setLaunch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getLaunch();
  }, []);

  const getLaunch = async () => {
    setIsLoading(true);
    try {
      let res = await services.launch.detail(slug);
      setLaunch(res.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <InnerPage>
      <StyledFullPageWrapper className="d-flex justify-content-center align-items-center">
        <TextBox className="d-flex flex-column justify-content-center align-items-center">
          <StyledTitle size="xLarge">{launch.mission_name}</StyledTitle>
        </TextBox>
      </StyledFullPageWrapper>
      <DetaliSection>
        <LoaderContainer isLoading={isLoading} />
        <CustomContainer>
          <TextHolder className="d-flex justify-content-center">
            <Text>{launch.details}</Text>
          </TextHolder>
        </CustomContainer>
      </DetaliSection>
    </InnerPage>
  );
}

export default Inner;
