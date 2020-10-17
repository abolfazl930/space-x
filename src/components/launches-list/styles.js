import styled from "styled-components";

export const Div = styled.div``;

export const List = styled.div`
  /* padding-top: ${(props) => props.theme.dimen.large}; */
`;

export const Row = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.border.borderColor2};
  cursor: pointer;
  height: 48px;
`;

export const Col1 = styled.div`
  width: 85px;
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.text.textColor2};
  @media (min-width: 576px) {
    width: 220px;
    font-size: ${(props) => props.theme.font.size.btn};
  }
`;

export const Col2 = styled.div`
  color: ${(props) => props.theme.text.textColor1};
  flex-grow: 1;
`;

export const Head1 = styled(Col1)`
  font-size: ${(props) => props.theme.font.size.firstTitle};
  font-weight: ${(props) => props.theme.font.weight.bold};
  color: ${(props) => props.theme.text.textColor1};
`;
export const Head2 = styled(Col2)`
  font-size: ${(props) => props.theme.font.size.firstTitle};
  font-weight: ${(props) => props.theme.font.weight.bold};
`;
