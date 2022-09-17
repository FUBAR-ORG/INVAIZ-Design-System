import { ComponentProps, PropsWithChildren, ReactNode, useId, useState } from 'react';
import styled from '@emotion/styled';
import useExternalClick from '@components/Dropdowns/hooks/use-external-click';
import SvgIcon from '@components/SvgIcons/SvgIcon';
import { css } from '@emotion/react';
import normalColor from '@themes/colors/normal-color';

interface Props {
  selected: ReactNode;
  iconProps?: Partial<ComponentProps<typeof SvgIcon>>;
  disabled?: boolean;
  error?: string;
}

export default function Dropdown({
  selected,
  iconProps,
  disabled,
  error,
  children,
}: PropsWithChildren<Props>) {
  const dropdownId = useId();
  const [open, setOpen] = useState(false);
  const handleToggleOpen = () => setOpen((prev) => !prev);

  useExternalClick({
    selector: `[data-dropdown-id='${dropdownId}']`,
    effect: () => setOpen(false),
  });

  const iconColor = (() => {
    if (error) {
      return normalColor.system.caution1;
    }
    if (disabled) {
      return normalColor.grayScale.gray400;
    }
    return normalColor.grayScale.basic.black;
  })();

  return (
    <Relative data-dropdown-id={dropdownId} onClick={handleToggleOpen}>
      <Trigger open={open} disabled={disabled} error={error}>
        <span>{selected}</span>
        <SvgIcon
          icon={error ? 'Caution' : 'Trigger'}
          size={20}
          style={{ transform: `rotate(${!error && open ? 180 : 0}deg)` }}
          color={iconColor}
          {...iconProps}
        />
      </Trigger>
      {open && <Menu>{children}</Menu>}
    </Relative>
  );
}

function Item(props: ComponentProps<typeof Button>) {
  return (
    <Li>
      <Button type='button' {...props} />
    </Li>
  );
}

Dropdown.Item = Item;

const Relative = styled.div`
  position: relative;
  display: inline-block;
  width: 240px;
  height: 48px;
`;

const Trigger = styled.button<{ open: boolean; error?: string }>`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.grayScale.coolGray100};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.grayScale.basic.black};
  ${({ open, theme }) =>
    open &&
    css`
      outline: 2px solid ${theme.color.primary.blue500};
    `}
  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.color.grayScale.gray200};
    color: ${({ theme }) => theme.color.grayScale.gray400};
  }
  ${({ error, theme }) =>
    !!error &&
    css`
      &:before {
        position: absolute;
        content: '${error}';
        font-size: ${theme.fontSize.size10};
        color: ${theme.color.system.caution1};
        top: -15px;
        left: 0;
      }
      outline: 2px solid ${theme.color.system.caution1};
    `}
`;

const Menu = styled.ul`
  position: absolute;
  list-style: none;
  width: 100%;
  border-radius: 5px;
  padding-left: 0;
  margin: 0;
  overflow: hidden;
  max-height: 144px;
  ${({ theme }) => theme.style.boxShadow.dropdownEmphasis};
`;

const Li = styled.li`
  height: 48px;
`;

const Button = styled.button<{ selected: boolean }>`
  position: relative;
  padding: 14px 12px;
  background: ${({ theme }) => theme.color.grayScale.basic.white};
  outline: none;
  cursor: pointer;
  border: none;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.grayScale.basic.black};
  text-align: left;
  &:hover {
    background: ${({ theme }) => theme.color.grayScale.coolGray100};
  }
  &:active {
    background: ${({ theme }) => theme.color.grayScale.coolGray200};
  }
  &:disabled {
    color: ${({ theme }) => theme.color.grayScale.gray400};
    cursor: not-allowed;
  }
  &:before {
    ${({ selected, theme }) =>
      selected &&
      css`
        position: absolute;
        content: '';
        width: 4px;
        height: 100%;
        top: 0;
        left: 0;
        background: ${theme.color.grayScale.basic.black};
      `}
  }
`;
