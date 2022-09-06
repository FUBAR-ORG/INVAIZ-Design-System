import {
  ComponentProps,
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useId,
  useState,
} from 'react';
import styled from '@emotion/styled';
import useExternalClick from '@components/Dropdowns/hooks/use-external-click';
import SvgIcon from '@components/SvgIcons/SvgIcon';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  selected: ReactNode;
  icon?: Partial<ComponentProps<typeof SvgIcon>>;
}

export default function Dropdown({ selected, icon, children, ...props }: PropsWithChildren<Props>) {
  const dropdownId = useId();
  const [open, setOpen] = useState(false);
  const handleToggleOpen = () => setOpen((prev) => !prev);

  useExternalClick({
    selector: `[data-dropdown-id='${dropdownId}']`,
    effect: () => setOpen(false),
  });

  return (
    <Relative data-dropdown-id={dropdownId} {...props}>
      <Trigger onClick={handleToggleOpen}>
        <span>{selected}</span>
        <SvgIcon
          icon='Trigger'
          size={20}
          style={{ transform: `rotate(${open ? 180 : 0}deg)` }}
          {...icon}
        />
      </Trigger>
      {open && <UlAbsolute onClick={handleToggleOpen}>{children}</UlAbsolute>}
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

const Trigger = styled.button`
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
`;

const UlAbsolute = styled.ul`
  position: absolute;
`;

const Li = styled.li``;
const Button = styled.button<{ selected: boolean }>``;
