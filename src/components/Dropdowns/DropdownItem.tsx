import { ComponentProps, ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { DROPDOWN_ITEM, FOCUSED } from '@components/Dropdowns/Dropdown';

function Default({ children, ...props }: ComponentProps<typeof Button>) {
  return (
    <Li>
      <Button className={DROPDOWN_ITEM} type='button' {...props}>
        <Span>{children}</Span>
      </Button>
    </Li>
  );
}

function IconMenus({
  children,
  icon,
  ...props
}: ComponentProps<typeof Button> & { icon: ReactNode }) {
  return (
    <Li>
      <Button className={DROPDOWN_ITEM} type='button' {...props}>
        <WithIcon>
          <Span>{children}</Span>
          <Icon>{icon}</Icon>
        </WithIcon>
      </Button>
    </Li>
  );
}

function OnlyIcon({ icon, ...props }: ComponentProps<typeof Button> & { icon: ReactNode }) {
  return (
    <Li>
      <Button className={DROPDOWN_ITEM} type='button' {...props}>
        <IconCenter>{icon}</IconCenter>
      </Button>
    </Li>
  );
}

const WithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Li = styled.li`
  height: 48px;
`;

const Button = styled.button<{ selected: boolean }>`
  position: relative;
  padding: 0;
  background: ${({ theme }) => theme.color.grayScale.basic.white};
  outline: none;
  cursor: pointer;
  border: none;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.grayScale.basic.black};
  text-align: left;
  &:hover,
  &:focus,
  &.${FOCUSED} {
    background: ${({ theme }) => theme.color.grayScale.coolGray100};
  }
  &:active {
    background: ${({ theme }) => theme.color.grayScale.coolGray200};
  }
  &:disabled {
    color: ${({ theme }) => theme.color.grayScale.gray400};
    cursor: not-allowed;
  }
  ${({ selected, theme }) =>
    selected &&
    css`
      &:before {
        position: absolute;
        content: '';
        width: 4px;
        height: 100%;
        top: 0;
        left: 0;
        background: ${theme.color.grayScale.basic.black};
      }
    `}
`;

const Span = styled.span`
  padding-left: 12px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 100%;
`;

const IconCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const DropdownItem = { Default, IconMenus, OnlyIcon };

export default DropdownItem;
