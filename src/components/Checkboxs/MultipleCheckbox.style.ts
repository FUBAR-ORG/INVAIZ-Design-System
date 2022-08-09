import styled from '@emotion/styled';
// React modules

import SvgIcon from '@components/SvgIcons/SvgIcon';
// components

export const StyleMultipleLockIcon = styled(SvgIcon)`
  stroke: ${({ theme }) => theme.color.grayScale.basic.white};
  fill: ${({ theme }) => theme.color.grayScale.basic.white};
`;

export const StyleMultipleCheckIcon = styled(SvgIcon)`
  stroke: ${({ theme }) => theme.normal.grayScale.basic.white};
`;

export const StyleMultipleCheckbox = styled.div`
  width: 20px;
  height: 20px;

  background: ${({ theme }) => theme.color.grayScale.coolGray500};
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
      background: ${({ theme }) => theme.color.primary.blue500};
    }
  }
`;
