import type { Story } from '@storybook/react';
// types

import { type ComponentProps, useState, useMemo } from 'react';
// React modules

import NestedCheckbox from '@components/Checkboxes/NestedCheckbox';
// components

export default {
  title: 'Components/Checkboxes/NestedCheckbox',
  component: NestedCheckbox,
};

export const Template: Story<ComponentProps<typeof NestedCheckbox>> = (props) => (
  <NestedCheckbox {...props}>
    <NestedCheckbox.Item text='Children' />
  </NestedCheckbox>
);
Template.storyName = 'Playground';
Template.args = {
  text: 'you can control to NestedCheckbox',
};

type CheckOption = {
  id: number;
  checked: boolean;
  disabled: boolean;
};

export const Usage = () => {
  const [checkedList, setCheckedList] = useState<CheckOption[]>([
    { id: 0, checked: false, disabled: false },
    { id: 1, checked: false, disabled: false },
    { id: 2, checked: false, disabled: false },
  ]);

  const onChange = (newChecked: boolean, setId: number) => {
    setCheckedList((prevList) =>
      prevList.map((prev) => ({ ...prev, checked: prev.id === setId ? newChecked : prev.checked }))
    );
  };

  const allCheck = useMemo(() => checkedList.every(({ checked }) => checked), [checkedList]);

  const onAllChange = () => {
    setCheckedList((prevList) => prevList.map((prev) => ({ ...prev, checked: !allCheck })));
  };

  const indeterminate = useMemo(
    () => !allCheck && checkedList.some(({ checked }) => checked),
    [checkedList, allCheck]
  );

  return (
    <NestedCheckbox
      text='Please enter your text here.'
      checked={allCheck}
      isIndeterminate={indeterminate}
      onChange={onAllChange}
    >
      {checkedList.map(({ id, checked }) => (
        <NestedCheckbox.Item
          key={id}
          text={`Test ${id}`}
          checked={checked}
          onChange={(c) => onChange(c, id)}
        />
      ))}
    </NestedCheckbox>
  );
};

export const Primary = () => (
  <NestedCheckbox text='Parent Checkbox'>
    <NestedCheckbox.Item text='Children number one' />
    <NestedCheckbox.Item text='Children number two' />
    <NestedCheckbox.Item text='Children number three' />
  </NestedCheckbox>
);

export const Nested = () => (
  <NestedCheckbox text='Parent Checkbox'>
    <NestedCheckbox.Item text='Children number one' />
    <NestedCheckbox.Item text='Children number two' />
    <NestedCheckbox.Item text='Children number three' />
    <NestedCheckbox text='Nested Checkbox'>
      <NestedCheckbox.Item text='Nested children number one' />
      <NestedCheckbox.Item text='Nested children number two' />
      <NestedCheckbox.Item text='Nested children number three' />
    </NestedCheckbox>
  </NestedCheckbox>
);
