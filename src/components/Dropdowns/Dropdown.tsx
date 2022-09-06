import styled from '@emotion/styled';
import { ReactNode, useId, useState } from 'react';
import useExternalClick from '@components/Dropdowns/hooks/use-external-click';

type DropdownOption<T, K> = {
  key?: string | number;
  value: T;
  label: K;
};

interface Props<T, K> {
  selected: T;
  onChange: (option: DropdownOption<T, K>) => void;
  options: DropdownOption<T, K>[];
}

export default function Dropdown<T, K extends ReactNode>({
  selected,
  onChange,
  options,
}: Props<T, K>) {
  const [open, setOpen] = useState(false);
  const dropdownId = useId();

  const handleClick = (value: DropdownOption<T, K>) => () => onChange(value);

  useExternalClick({
    selector: `[data-dropdownId='${dropdownId}']`,
    effect: () => setOpen(false),
  });

  const selectedLabel = options.find((option) => option.value === selected)?.label;

  return (
    <Relative data-dropdownId={dropdownId}>
      <Trigger onClick={() => setOpen(true)}>{selectedLabel}</Trigger>
      {open && (
        <MenuAbsolute>
          {options.map((option, index) => (
            <Li key={option.key ?? index}>
              <Button
                type='button'
                selected={option.value === selected}
                onClick={handleClick(option)}
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
