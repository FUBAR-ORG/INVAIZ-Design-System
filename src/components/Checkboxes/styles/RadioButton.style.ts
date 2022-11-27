import styled from '@emotion/styled';
// React modules

import { StyleCommonCheckboxInput } from '@components/Checkboxes/styles/CommonCheckbox.style';
// styles

export const StyleRadioButton = styled.div`
  position: relative;

  width: 20px;
  height: 20px;

  border-radius: 10px;

  border: solid 1px ${({ theme }) => theme.color.grayScale.coolGray500};

  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;

    width: 12px;
    height: 12px;

    border-radius: 6px;
  }
`;

export const StyleRadioButtonInput = styled(StyleCommonCheckboxInput)`
  &:checked {
    & + div {
      &::before {
        background: ${({ theme }) => theme.color.primary.blue500};
      }
    }
  }
  &:disabled {
    & + div {
      border-color: ${({ theme }) => theme.color.system.off1};
    }
    &:checked {
      & + div {
        &::before {
          background: ${({ theme }) => theme.color.system.off1};
        }
      }
    }
  }
`;
