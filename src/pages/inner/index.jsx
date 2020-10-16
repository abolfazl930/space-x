import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomContainer from "../../components/shared/custom-continer";

import Title from "../../components/shared/title";
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

  useEffect(() => {
    getLaunch();
  }, []);

  const getLaunch = async () => {
    try {
      let res = await services.launch.detail(slug);
      setLaunch(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <InnerPage>
      <StyledFullPageWrapper className="d-flex justify-content-center align-items-center">
        <TextBox className="d-flex flex-column justify-content-center align-items-center">
          <StyledTitle size="xLarge">{launch.mission_name}</StyledTitle>
        </TextBox>
      </StyledFullPageWrapper>
      <DetaliSection>
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
