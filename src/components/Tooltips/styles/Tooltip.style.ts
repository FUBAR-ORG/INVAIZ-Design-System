import styled from '@emotion/styled';
import { css } from '@emotion/react';
// styles

interface StyleTooltipTextProps {
  textSize?: number;
}

// eslint-disable-next-line import/prefer-default-export
export const StyleTooltipText = styled.p<StyleTooltipTextProps>`
  color: #fff;
  ${({ theme }) => theme.font.kopub.contents5}

  ${({ textSize }) =>
    textSize &&
    css`
      font-size: ${textSize}px;
    `}
  
  margin: 0;
`;
