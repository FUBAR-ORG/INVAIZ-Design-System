import styled from '@emotion/styled';
// React modules

import SvgIcon from '@components/SvgIcons/SvgIcon';
// components

import {
  StyleCommonCheckbox,
  StyleCommonCheckboxInput,
} from '@components/Checkboxes/styles/CommonCheckbox.style';
// styles

export const StyleFillCheckIcon = styled(SvgIcon)`
  fill: ${({ theme }) => theme.normal.grayScale.basic.white};
`;

export const StyleFillCheckbox = styled(StyleCommonCheckbox)`
  background: ${({ theme }) => theme.color.grayScale.coolGray500};
`;

export const StyleFillCheckboxInput = styled(StyleCommonCheckboxInput)`
  &:checked {
    & + div {
      background: ${({ theme }) => theme.color.primary.blue500};
    }
  }
  &:disabled {
    & + div {
      background: ${({ theme }) => theme.color.grayScale.gray300};
      & > svg {
        fill: ${({ theme }) => theme.color.system.off1};
      }
    }
    &:checked {
      & + div {
        background: ${({ theme }) => theme.color.system.off1};
        & > svg {
          fill: ${({ theme }) => theme.color.system.off2};
        }
      }
    }
  }
`;
