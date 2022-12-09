import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ButtonProps {
  selected?: boolean;
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  ${({ theme }) => theme.style.fontFace.kopub};
  outline: none;
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  font-size: 14px;
  position: relative;
`;

export const Line = styled(Button)`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme, selected }) =>
    selected ? theme.color.grayScale.basic.black : theme.color.grayScale.gray500};

  padding: 4px;
  margin-right: 20px;

  &:last-of-type {
    margin-right: 0;
  }

  background: none;
  border-top: none;
  border-right: none;
  border-bottom: ${({ theme, selected }) =>
    selected ? `2px solid ${theme.color.primary.blue500}` : 'none'};
  border-left: none;

  &:hover {
    color: ${({ theme, selected, disabled }) =>
      !selected && !disabled && theme.color.primary.blue500};
    border-bottom-color: ${({ theme, selected, disabled }) =>
      selected && !disabled && theme.color.grayScale.coolGray500};
  }
`;

export const Contain = styled(Button)`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme, selected }) =>
    selected ? theme.color.grayScale.basic.white : theme.color.grayScale.coolGray500};

  padding: 5px 12px;
  margin-right: 10px;

  &:last-of-type {
    margin-right: 0;
  }

  background: ${({ theme, selected }) => (selected ? theme.color.primary.blue500 : 'none')};
  border: 2px solid
    ${({ theme, selected }) =>
      selected ? theme.color.primary.blue500 : theme.color.grayScale.coolGray200};
  border-radius: 20px;

  &:hover {
    color: ${({ theme, selected }) => !selected && theme.color.grayScale.basic.black};
    background: ${({ theme, selected }) =>
      selected ? theme.color.grayScale.coolGray500 : theme.color.grayScale.coolGray200};
    border-color: ${({ theme, selected }) =>
      selected ? theme.color.grayScale.coolGray500 : theme.color.grayScale.coolGray200};
  }
`;

export const Vertical = styled(Button)`
  width: 160px;
  height: 40px;
  border: none;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme, selected }) =>
    selected ? theme.color.grayScale.basic.black : theme.color.grayScale.coolGray700};

  background: none;
  padding-left: 24px;

  &:hover {
    background: ${({ theme }) => theme.color.grayScale.coolGray100};
  }

  ${({ theme, selected }) =>
    selected &&
    css`
      padding-left: 20px;

      &::before {
        content: '';
        position: relative;
        left: -16px;
        top: 0;

        border-left: 4px solid ${theme.color.primary.blue500};
      }
    `}
`;

export const Panel = styled.div``;
