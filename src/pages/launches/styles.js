import styled from "styled-components";
import bgImg from "../../assets/images/launch-bg.webp";
import FullPageWrapper from "../../components/shared/full-page-wrapper";
import Title from "../../components/shared/title";

export const LuancPage = styled.section``;

export const StyledFullPageWrapper = styled(FullPageWrapper)`
  background-image: url(${bgImg});
`;

export const TextBox = styled.div`
  margin-bottom: 200px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: ${(props) => props.theme.dimen.small};
`;

export const ArrowHolder = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100%;
`;

export const ListSection = styled.div`
  min-height: 100vh;
  position: relative;
  padding-top: ${(props) => props.theme.dimen.large};
`;
