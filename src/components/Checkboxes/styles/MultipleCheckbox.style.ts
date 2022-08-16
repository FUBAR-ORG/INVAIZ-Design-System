import styled from '@emotion/styled';
// React modules

import SvgIcon from '@components/SvgIcons/SvgIcon';
// components

import {
  StyleCommonCheckbox,
  StyleCommonCheckboxInput,
} from '@components/Checkboxes/styles/CommonCheckbox.style';
// styles

export const StyleMultipleLockIcon = styled(SvgIcon)`
  stroke: ${({ theme }) => theme.color.grayScale.basic.white};
  fill: ${({ theme }) => theme.color.grayScale.basic.white};
`;

export const StyleMultipleCheckIcon = styled(SvgIcon)`
  stroke: ${({ theme }) => theme.normal.grayScale.basic.white};
`;

export const StyleMultipleCheckbox = styled(StyleCommonCheckbox)`
  background: ${({ theme }) => theme.color.grayScale.coolGray500};
`;

export const StyleMultipleCheckboxInput = styled(StyleCommonCheckboxInput)`
  &:checked {
    & + div {
      background: ${({ theme }) => theme.color.primary.blue500};
    }
  }
`;
