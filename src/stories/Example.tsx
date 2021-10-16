import styled from '@emotion/styled';

export interface ComponentProps {
  text: string;
}

export default function Component({ text }: ComponentProps) {
  return (
    <Wrapper>
      <h3>{text}</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: yellow;
  width: 200px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
