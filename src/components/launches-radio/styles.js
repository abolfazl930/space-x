import styled from "styled-components";

export const RadioHolder = styled.div`
  margin-bottom: ${(props) => props.theme.dimen.large};
`;

export const Text = styled.p`
  font-weight: ${(props) => props.theme.font.weight.bold};
  color: ${(props) => props.theme.text.textColor1};
  font-size: ${(props) => props.theme.font.size.firstTitle};
  margin-bottom: ${(props) => props.theme.dimen.small};
`;
