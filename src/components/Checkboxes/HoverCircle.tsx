import styled from '@emotion/styled';
import { css } from '@emotion/react';
// React modules

interface HoverCircleProps {
  /** 호버 시 발생하는 원형 요소의 활성화 여부를 나타냄 */
  disabled?: boolean;
}

/**
 * 호버 시 발생하는 원형 요소를 표현하는 컴포넌트입니다.
 */
const HoverCircle = styled.span<HoverCircleProps>`
  position: relative;

  display: inline-block;

  cursor: pointer;
  padding: 10px;

  box-sizing: border-box;
  border-radius: 50%;

  vertical-align: middle;

  &:hover {
    background: ${({ theme }) => theme.color.primary.blue200};
  }
  &:active {
    background: ${({ theme }) => theme.color.primary.blue300};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      &:hover {
        background: none;
      }
      &:active {
        background: none;
      }
    `}
`;

export default HoverCircle;
