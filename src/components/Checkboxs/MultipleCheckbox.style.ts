import styled from '@emotion/styled';
// React.js module

import SvgIcon from '@components/SvgIcons/SvgIcon';
// components

export const StyleMultipleLockIcon = styled(SvgIcon)``;

export const StyleMultipleCheckIcon = styled(SvgIcon)`
  opacity: 0.2;
`;

export const StyleMultipleCheckbox = styled.div`
  width: 20px;
  height: 20px;

  background: ${({ theme }) => theme.color.light};
  border-radius: 5px;
`;

export const StyleMultipleCheckboxInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  margin: 0;

  opacity: 0;

  &:checked {
    & + div > div {
      background: ${({ theme }) => theme.color.point1};
      & > svg {
        opacity: 1;
      }
    }
  }
`;
