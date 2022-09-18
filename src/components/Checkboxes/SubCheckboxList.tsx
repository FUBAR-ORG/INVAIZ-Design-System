import { useMemo } from 'react';
// React modules

import { type OutlineCheckboxProps, ParentCheckbox } from '@components/Checkboxes/OutlineCheckbox';
// components

type CheckItem = Omit<OutlineCheckboxProps, 'onChange'>;

interface SubCheckboxListProps {
  text: string;
  checkList: (CheckItem | CheckItem[])[];
}

const SubCheckboxList = ({ text, checkList }: SubCheckboxListProps) => {
  return (
    <div>
      <ParentCheckbox text={text} />
      <ul>
        <li></li>
      </ul>
    </div>
  );
};
