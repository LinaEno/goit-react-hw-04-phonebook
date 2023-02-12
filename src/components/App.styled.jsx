import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  background-color: ${p => p.theme.colors.background};
  padding: ${p => p.theme.space[5]}px;
  border: 1px solid;
  border-color: ${p => p.theme.colors.borderBtn};
  border-radius: ${p => p.theme.borders.borderRadius}px;
`;

export const MainTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.mainText};
  text-align: center;
  line-height: ${p => p.theme.lineHeights.title};
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.mainText};
  text-align: center;
  line-height: ${p => p.theme.lineHeights.title};
`;

export const Message = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.mainText};
  text-align: center;
  line-height: ${p => p.theme.lineHeights.title};
`;
