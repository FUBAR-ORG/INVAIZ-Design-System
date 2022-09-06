import styled from '@emotion/styled';
import { ReactNode, useId, useState } from 'react';
import useExternalClick from '@components/Dropdowns/hooks/use-external-click';

type DropdownOption<T> = {
  key?: string | number;
  value: T;
  label: ReactNode;
};

interface Props<T> {
  value: T;
  onChange: (value: T) => void;
  options: DropdownOption<T>[];
}

export default function Dropdown<T>({ value, onChange, options }: Props<T>) {
  const [open, setOpen] = useState(false);
  const dropdownId = useId();

  const handleClick = (selected: T) => () => onChange(selected);

  useExternalClick({
    selector: `[data-dropdownId='${dropdownId}']`,
    effect: () => setOpen(false),
  });

  const selectedLabel = options.find((option) => option.value === value)?.label;

  return (
    <Relative data-dropdownId={dropdownId}>
      <Trigger onClick={() => setOpen(true)}>{selectedLabel}</Trigger>
      {open && (
        <MenuAbsolute>
          {options.map((option, index) => (
            <Li key={option.key ?? index}>
              <Button
                type='button'
                selected={option.value === value}
                onClick={handleClick(option.value)}
              >
                {option.label}
              </Button>
            </Li>
          ))}
        </MenuAbsolute>
      )}
    </Relative>
  );
}

const Relative = styled.div`
  position: relative;
`;

const Trigger = styled.button`
  background: ${({ theme }) => theme.color.grayScale.gray100};
`;

const MenuAbsolute = styled.ul`
  position: absolute;
`;

const Li = styled.li``;
const Button = styled.button<{ selected: boolean }>``;
