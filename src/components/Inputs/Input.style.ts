import styled from '@emotion/styled';

interface WrapperProps {
  width?: number;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  display: flex;
  align-items: center;
`;

export const Box = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  outline: none;
  background: ${({ theme }) => theme.color.grayScale.coolGray100};
  padding: 0 16px;

  ${({ theme }) => theme.font.kopub};
  font-size: ${({ theme }) => theme.color.grayScale.basic.black};

  &::placeholder {
    color: ${({ theme }) => theme.color.grayScale.coolGray400};
  }

  &:focus {
    ${({ theme }) => theme.style.border.selected};
    padding: 0 14px;
  }
`;
