import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  border: 1px solid ${(props) => props.theme.border.borderColor1};
  padding: 16px 48px;
  font-size: ${(props) => props.theme.font.size.btn};
  color: ${(props) => props.theme.text.textColor1};
`;
