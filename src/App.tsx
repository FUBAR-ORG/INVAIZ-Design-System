import styled from '@emotion/styled';

export default function App() {
  return <ThemeTest>Project Init</ThemeTest>;
}

const ThemeTest = styled.div`
  color: ${({ theme }) => theme.color.light.text.basic};
  ${({ theme }) => theme.font.categoryTitle};
`;
