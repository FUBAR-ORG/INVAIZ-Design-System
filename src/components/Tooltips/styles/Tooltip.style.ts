import type { TooltipProps } from '@components/Tooltips/interfaces/Tooltip.interface';
// interfaces

import styled from '@emotion/styled';
import { css } from '@emotion/react';
// styles

// eslint-disable-next-line import/prefer-default-export
export const StyleTooltipText = styled.p<Pick<TooltipProps, 'textSize'>>`
  color: #fff;
  ${({ theme }) => theme.font.kopub.contents5}

  ${({ textSize }) =>
    textSize &&
    css`
      font-size: ${textSize}px;
    `}
  
  margin: 0;
`;
