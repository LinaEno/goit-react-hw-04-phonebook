import styled from '@emotion/styled';

export const Contact = styled.li`
  color: ${p => p.theme.colors.mainText};
  font-size: ${p => p.theme.fontSizes.l};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Button = styled.button`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.btnBg};
  color: ${p => p.theme.colors.mainText};
  border-radius: ${p => p.theme.borders.borderRadius}px;
  border-color: ${p => p.theme.colors.btnBg};
  outline: none;
  font-size: ${p => p.theme.fontSizes.l};
  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.hoverBgColor};
    color: ${p => p.theme.colors.black};
  }
`;
