import styled from "styled-components";
import bgImg from "../../assets/images/main-bg.webp";
import Title from "../../components/shared/title";
import PageWrapper from "../../components/shared/page-wrapper";

export const StyledPageWrapper = styled(PageWrapper)`
  background-image: url(${bgImg});
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
