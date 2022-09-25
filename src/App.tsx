import { useMemo, useState } from 'react';

import OutlineCheckbox from '@components/Checkboxes/OutlineCheckbox';
import FillCheckbox from '@components/Checkboxes/FillCheckbox';
import RadioButton from '@components/Checkboxes/RadioButton';
import NestedCheckbox from '@components/Checkboxes/NestedCheckbox';
import ImplementedNestedCheckbox, {
  useNestedCheckboxState,
} from '@components/Checkboxes/ImplementedNestedCheckbox';

interface CheckOption {
  id: number;
  checked: boolean;
  disabled: boolean;
}

export default function App() {
  const nestedCheckboxState = useNestedCheckboxState([
    { id: 0, checked: false, disabled: false, text: '1' },
    { id: 1, checked: true, disabled: true, text: '2' },
    { id: 2, checked: false, disabled: false, text: '3' },
  ]);

  const [checkedList, setCheckedList] = useState<CheckOption[]>([
    { id: 0, checked: false, disabled: false },
    { id: 1, checked: true, disabled: true },
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
    <>
      <OutlineCheckbox text='Jump out the window. if you are the object of passion. Flee it if you feel it. Passion goes, boredom remains' />
      <OutlineCheckbox text='Please enter your text here.' />
      <FillCheckbox />
      <RadioButton />
      <br />
      <h1>NestedCheckbox</h1>
      <NestedCheckbox
        text='Jump out the window. if you are the object of passion. Flee it if you feel it. Passion goes, boredom remains'
        checked={allCheck}
        isIndeterminate={indeterminate}
        onChange={onAllChange}
      >
        {checkedList.map(({ id, checked, disabled }) => (
          <NestedCheckbox.Item
            key={id}
            text={`Test ${id}`}
            checked={checked}
            disabled={disabled}
            onChange={(c) => onChange(c, id)}
          />
        ))}
        <OutlineCheckbox text='Jump out the window. if you are the object of passion. Flee it if you feel it. Passion goes, boredom remains' />
      </NestedCheckbox>
      <br />
      <h1>ImplementedNestedCheckbox</h1>
      <ImplementedNestedCheckbox text='test' {...nestedCheckboxState} />
    </>
  );
}
