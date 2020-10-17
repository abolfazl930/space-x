import styled from "styled-components";
import FullPageWrapper from "../../components/shared/full-page-wrapper";
import Title from "../../components/shared/title";

import bgImg from "../../assets/images/inner-bg.webp";

export const InnerPage = styled.section``;

export const StyledFullPageWrapper = styled(FullPageWrapper)`
  background-image: url(${bgImg});
  height: 50vh;
  background-position: bottom;
`;

export const TextBox = styled.div`
  /* margin-bottom: 200px; */
`;

export const StyledTitle = styled(Title)`
  margin-bottom: ${(props) => props.theme.dimen.small};
  text-align: center;
`;

export const DetaliSection = styled.div`
  position: relative;
  padding-top: ${(props) => props.theme.dimen.large};
`;
export const TextHolder = styled.div``;
export const Text = styled.p`
  color: ${(props) => props.theme.text.textColor1};
  text-align: left;
  font-size: ${(props) => props.theme.font.size.firstTitle};
  line-height: 30px;
`;
