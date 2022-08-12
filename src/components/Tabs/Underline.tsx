import styled from '@emotion/styled';

interface Props {
  underlinePos: number;
  underlineWidth: number;
}

export default function Underline({ underlinePos, underlineWidth }: Props) {
  return <Wrapper underlinePos={underlinePos} underlineWidth={underlineWidth} />;
}

const Wrapper = styled.span<Props>`
  position: absolute;
  display: block;
  bottom: 0;
  background: ${({ theme }) => theme.color.grayScale.coolGray700};
  height: 2px;
  transform: translateX(${({ underlinePos }) => `${underlinePos}px`});
  width: ${({ underlineWidth }) => `${underlineWidth}`}px;
  transition-property: transform, width;
  transition-duration: 0.3s;
`;
