import styled from '@emotion/styled';

export type StyleInputProps = {
  scale: 'normal' | 'large';
  fontSize: 'normal' | 'large';
  fullWidth: boolean;
};

export const Input = styled.input<StyleInputProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '280px')};
  padding: ${({ scale }) => (scale === 'large' ? '32px' : '16px')};
  font-size: ${({ fontSize }) => (fontSize === 'large' ? '20px' : '16px')};
  margin: 16px;
  outline: 0;
  background-color: #ffffff00;
  border: 1px solid #00000012;
  color: #000000e6;
  border-radius: 4px;

  &::placeholder {
    size: 12px;
    color: #0000008f;
  }
`;
