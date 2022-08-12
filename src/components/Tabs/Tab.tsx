import styled from '@emotion/styled';
import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Tab = forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => (
  <Wrapper type='button' ref={ref} {...props}>
    {children}
  </Wrapper>
));

export default Tab;

const Wrapper = styled.button`
  ${({ theme }) => theme.style.fontFace.kopub};
  color: ${({ theme }) => theme.color.grayScale.basic.black};
  font-size: ${({ theme }) => theme.fontSize.size12}px;
  background: transparent;
  border: none;
  padding: 2px 8px;
  cursor: pointer;
`;
