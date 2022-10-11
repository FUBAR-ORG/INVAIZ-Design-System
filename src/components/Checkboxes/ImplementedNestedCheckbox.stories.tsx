import type { Story } from '@storybook/react';
// types

import { type ComponentProps } from 'react';
// React modules

import ImplementedNestedCheckbox, {
  useNestedCheckboxState,
} from '@components/Checkboxes/ImplementedNestedCheckbox';
// components

export default {
  title: 'Components/Checkboxes/ImplementedNestedCheckbox',
  component: ImplementedNestedCheckbox,
};

export const Template: Story<ComponentProps<typeof ImplementedNestedCheckbox>> = ({
  text,
  checkList,
}) => {
  const nestedCheckboxState = useNestedCheckboxState(checkList);
  return <ImplementedNestedCheckbox text={text} {...nestedCheckboxState} />;
};
Template.storyName = 'Playground';
Template.args = {
  text: 'you can control to ImplementedNestedCheckbox',
  checkList: [
    { id: 1, checked: false, text: 'Children' },
    { id: 2, checked: false, text: 'Children' },
    { id: 3, checked: false, text: 'Children' },
    { id: 4, checked: false, text: 'Children' },
    { id: 5, checked: false, text: 'Children' },
  ],
};
