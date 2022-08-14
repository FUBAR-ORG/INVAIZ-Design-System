import styled from '@emotion/styled';
// React modules

import SvgIcon from '@components/SvgIcons/SvgIcon';
// components

export const StyleCheckboxWrapper = styled.label`
  display: inline-block;
`;

export const StyleCheckIcon = styled(SvgIcon)`
  width: 100%;
  height: 100%;
  stroke: ${({ theme }) => theme.color.grayScale.coolGray900};
  visibility: hidden;
`;

export const StyleCheckboxView = styled.div`
  position: relative;

  display: inline-block;
  width: 40px;
  height: 40px;

  cursor: pointer;
  padding: 10px;

  box-sizing: border-box;

  vertical-align: middle;
`;

export const StyleCheckbox = styled.div`
  width: 20px;
  height: 20px;

  border: solid 1px ${({ theme }) => theme.color.grayScale.basic.black};
  border-radius: 5px;
`;

export const StyleCheckboxText = styled.p`
  display: inline-block;
  width: 180px;

  color: ${({ theme }) => theme.color.grayScale.basic.black};
  ${({ theme }) => theme.font.kopub.contents7};

  margin: 0;

  vertical-align: middle;

  cursor: pointer;
`;

export const StyleCheckboxInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  margin: 0;

  opacity: 0;

  &:checked {
    & + div > div {
      border-color: ${({ theme }) => theme.color.grayScale.basic.black};
      & > svg {
        visibility: visible;
      }
    }
  }
`;
