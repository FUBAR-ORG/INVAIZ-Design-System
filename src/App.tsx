import OutlineCheckbox from '@components/Checkboxes/OutlineCheckbox';
import FillCheckbox from '@components/Checkboxes/FillCheckbox';
import RadioButton from '@components/Checkboxes/RadioButton';
import SubCheckboxWrapper from '@components/Checkboxes/SubCheckboxWrapper';
import { useMemo, useState } from 'react';

interface CheckOption {
  id: number;
  checked: boolean;
  disabled: boolean;
}

export default function App() {
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

  const indeterminate = useMemo(
    () => !allCheck && checkedList.some(({ checked }) => checked),
    [checkedList, allCheck]
  );

  return (
    <>
      <OutlineCheckbox text='Jump out the window. if you are the object of passion. Flee it if you feel it. Passion goes, boredom remains' />
      <OutlineCheckbox text='Please enter your text here.' />
      <FillCheckbox />
      <RadioButton />
      <SubCheckboxWrapper
        text='Please enter your text here.'
        checked={allCheck}
        isIndeterminate={indeterminate}
      >
        <OutlineCheckbox text='Jump out the window. if you are the object of passion. Flee it if you feel it. Passion goes, boredom remains' />
        {checkedList.map(({ id }) => (
          <SubCheckboxWrapper.Item
            key={id}
            text={`Test ${id}`}
            onChange={(checked) => onChange(checked, id)}
          />
        ))}
      </SubCheckboxWrapper>
    </>
  );
}
