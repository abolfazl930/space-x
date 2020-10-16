import styled from "styled-components";
export const Input = styled.input`
  background: transparent;
  border: 1px solid ${(props) => props.theme.border.borderColor2};
  border-radius: 8px;
  padding: ${(props) => props.theme.dimen.small};
  width: 100%;
  outline: none;
  color: ${(props) => props.theme.text.textColor1};
  font-size: ${(props) => props.theme.font.size.btn};
  &:placeholder {
    color: ${(props) => props.theme.border.borderColor2};
  }
`;
