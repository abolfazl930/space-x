import styled from "styled-components";
import bgImg from "../../assets/images/launch-bg.webp";
import PageWrapper from "../../components/shared/page-wrapper";
import Title from "../../components/shared/title";

export const StyledPageWrapper = styled(PageWrapper)`
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
