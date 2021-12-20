import styled from '@emotion/styled';

export default function App() {
  return <ThemeTest>Project Init</ThemeTest>;
}

const ThemeTest = styled.div`
  color: ${({ theme }) => theme.color.red10};
  ${({ theme }) => theme.font.size20pt};
`;
