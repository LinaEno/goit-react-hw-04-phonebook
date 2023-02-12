import styled from '@emotion/styled';

export const Label = styled.label`
  color: ${p => p.theme.colors.mainText};
  font-size: ${p => p.theme.fontSizes.l};
  display: block;
`;

export const Input = styled.input`
  display: block;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.mainText};
  background-color: ${p => p.theme.colors.background};
  outline: none;
  border-color: ${p => p.theme.colors.borderBtn};
  width: 478px;
  height: 40px;
  border-radius: ${p => p.theme.borders.borderRadius}px;
  font-size: ${p => p.theme.fontSizes.l};
  padding-left: ${p => p.theme.space[4]}px;
  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.btnBg};
  }
`;
