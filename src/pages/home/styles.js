import styled from "styled-components";
import bgImg from "../../assets/images/main-bg.jpg";
import Title from "../../components/shared/title";

export const Section = styled.section`
  background-image: url(${bgImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding-top: 100px;
`;
export const InnerContainer = styled.div`
  position: relative;
  height: calc(100vh - 100px);
`;
export const TextBox = styled.div`
  position: absolute;
  bottom: 17%;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 12px;
`;
