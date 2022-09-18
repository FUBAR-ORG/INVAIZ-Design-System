import {
  ComponentProps,
  KeyboardEvent,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useId,
  useState,
} from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SvgIcon from '@components/SvgIcons/SvgIcon';
import useEventListener from '@components/Dropdowns/hooks/use-event-listener';
import normalColor from '@themes/colors/normal-color';
import useExternalClick from '@components/Dropdowns/hooks/use-external-click';

export const FOCUSED = 'focused' as const;
export const DROPDOWN_ITEM = 'dropdown-item' as const;

type DropdownType = 'default' | 'outline-fill' | 'outline';

interface Props {
  text: ReactNode;
  type?: DropdownType;
  icon?: ReactNode;
  arrowIconProps?: Partial<ComponentProps<typeof SvgIcon>>;
  disabled?: boolean;
  error?: string;
}

export default function Dropdown({
  text,
  type = 'default',
  icon,
  arrowIconProps,
  disabled,
  error,
  children,
}: PropsWithChildren<Props>) {
  const dropdownId = useId();
  const [ref, setRef] = useState<HTMLUListElement | null>(null);
  const [focused, setFocused] = useState<number>(-1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => !disabled && setOpen((prev) => !prev);

  const resetDropdown = () => {
    setOpen(false);
    setFocused(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!ref) {
      return;
    }
    const dropdownList = Array.from(ref.querySelectorAll<HTMLElement>(`.${DROPDOWN_ITEM}`));
    dropdownList.forEach((item) => item.classList.remove(FOCUSED));
    const focusedItem = dropdownList.at(focused);
    switch (e.key) {
      case 'Enter':
        focusedItem?.click();
        break;
      case 'ArrowDown':
        setFocused((prev) => {
          const next = (prev + 1) % dropdownList.length;
          dropdownList.at(next)?.classList.add(FOCUSED);
          return next;
        });
        break;
      case 'ArrowUp':
        setFocused((prev) => {
          const next = (prev + dropdownList.length - 1) % dropdownList.length;
          dropdownList.at(next)?.classList.add(FOCUSED);
          return next;
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!ref || focused === -1) {
      return;
    }
    Array.from(ref.querySelectorAll<HTMLElement>(`.${DROPDOWN_ITEM}`))
      .at(focused)
      ?.scrollIntoView({ block: 'nearest' });
  }, [ref, focused]);

  useExternalClick({
    selector: `[data-dropdown-id='${dropdownId}']`,
    listener: resetDropdown,
  });

  useEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      resetDropdown();
    }
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

  const content = icon ? (
    <WithIcon>
      <Icon>{icon}</Icon> {text}
    </WithIcon>
  ) : (
    <Text>{text}</Text>
  );

  const arrowIcon = (
    <Icon>
      <SvgIcon
        icon={error ? 'Caution' : 'Trigger'}
        size={20}
        style={{ transform: `rotate(${!error && open ? 180 : 0}deg)` }}
        color={iconColor}
        {...arrowIconProps}
      />
    </Icon>
  );

  return (
    <Relative onKeyDown={handleKeyDown}>
      <Trigger
        data-dropdown-id={dropdownId}
        open={open}
        dropdownType={type}
        disabled={disabled}
        error={error}
        onClick={handleOpen}
      >
        {content}
        {arrowIcon}
      </Trigger>
      {open && <Menu ref={setRef}>{children}</Menu>}
    </Relative>
  );
}

const Relative = styled.div`
  position: relative;
  display: inline-block;
  width: 240px;
  height: 48px;
`;

const WithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${({ theme }) => theme.fontSize.size14}px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 100%;
`;

const Text = styled.span`
  padding-left: 12px;
`;

const Trigger = styled.button<{ open: boolean; dropdownType: DropdownType; error?: string }>`
  width: 100%;
  height: 100%;
  padding: 0;
  background: ${({ theme, dropdownType }) =>
    dropdownType !== 'outline' ? theme.color.grayScale.coolGray100 : 'none'};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.grayScale.basic.black};
  font-size: ${({ theme }) => theme.fontSize.size14}px;
  &:focus {
    outline: ${({ theme }) => `2px solid ${theme.color.primary.blue500}`};
  }
  outline: ${({ error, dropdownType, theme }) => {
    if (error) {
      return `2px solid ${theme.color.system.caution1}`;
    }
    switch (dropdownType) {
      case 'outline-fill':
        return `2px solid ${theme.color.grayScale.coolGray500}`;
      case 'outline':
        return `2px solid ${theme.color.grayScale.coolGray500}`;
      default:
        return 'none';
    }
  }};

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
        font-size: ${theme.fontSize.size10}px;
        color: ${theme.color.system.caution1};
        top: -15px;
        left: 0;
      }
    `}
`;

const Menu = styled.ul`
  position: absolute;
  list-style: none;
  width: 100%;
  border-radius: 5px;
  padding-left: 0;
  margin: 0;
  max-height: 144px;
  overflow: auto;
  ${({ theme }) => theme.style.boxShadow.dropdownEmphasis};
`;
