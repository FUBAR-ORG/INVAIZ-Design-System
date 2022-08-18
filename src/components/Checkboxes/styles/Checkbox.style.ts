import styled from '@emotion/styled';
// React modules

import SvgIcon from '@components/SvgIcons/SvgIcon';
// components

import {
  StyleCommonCheckbox,
  StyleCommonCheckboxInput,
} from '@components/Checkboxes/styles/CommonCheckbox.style';
// styles

export const StyleLabel = styled.label``;

export const StyleCheckIcon = styled(SvgIcon)`
  width: 100%;
  height: 100%;
  stroke: ${({ theme }) => theme.color.grayScale.coolGray900};
  visibility: hidden;
`;

export const StyleCheckbox = styled(StyleCommonCheckbox)`
  border: solid 1px ${({ theme }) => theme.color.grayScale.basic.black};
`;

export const StyleCheckboxInput = styled(StyleCommonCheckboxInput)`
  &:checked {
    & + div {
      border-color: ${({ theme }) => theme.color.grayScale.basic.black};
      & > svg {
        visibility: visible;
      }
    }
  }
`;

export const StyleCheckboxText = styled.p`
  display: inline-block;
  max-width: 180px;

  color: ${({ theme }) => theme.color.grayScale.basic.black};
  ${({ theme }) => theme.font.kopub.contents7};

  margin: 0;

  vertical-align: middle;

  cursor: pointer;
`;
