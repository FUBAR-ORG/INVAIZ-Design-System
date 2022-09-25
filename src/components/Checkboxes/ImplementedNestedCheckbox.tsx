import { useState, useMemo, ComponentProps } from 'react';
import styled from '@emotion/styled';
// React modules

import OutlineCheckbox, { ParentCheckbox } from '@components/Checkboxes/OutlineCheckbox';
// components

interface CheckItem extends Omit<ComponentProps<typeof OutlineCheckbox>, 'onChange'> {
  /**
   * 하위 체크박스들을 식별할 수 있는 식별자입니다.
   */
  id: CheckItemId;
}

type CheckList = CheckItem[];
type CheckItemId = string | number;

interface ImplementedNestedCheckboxProps
  extends Omit<ComponentProps<typeof ParentCheckbox>, 'onChange'> {
  checkList: CheckList;

  /**
   * 하위 체크박스 체크 상태를 변경하는 이벤트 리스너입니다.
   *
   * * `useNestedCheckboxState` 훅을 사용하여 가져온 객체 내의 함수를 그대로 사용합니다.
   *
   * @param checked 변경 후의 체크 상태를 매개 변수로 입력 받습니다.
   * @param id 변경된 체크박스의 `id` 식별자 값을 매개 변수로 입력 받습니다.
   */
  onChange?: (checked: boolean, id: CheckItemId) => void;
  /**
   * 모든 하위 체크박스 체크 상태를 변경하는 이벤트 리스너입니다.
   *
   * * `useNestedCheckboxState` 훅을 사용하여 가져온 객체 내의 함수를 그대로 사용합니다.
   */
  onAllChange: () => void;
}

export function useNestedCheckboxState(
  initCheckList: CheckList
): Omit<ImplementedNestedCheckboxProps, 'text' | 'disabled'> {
  const [checkList, setCheckList] = useState<CheckList>(initCheckList);

  const allCheck = useMemo(() => checkList.every(({ checked }) => checked), [checkList]);

  const isIndeterminate = useMemo(
    () => !allCheck && checkList.some(({ checked }) => checked),
    [checkList, allCheck]
  );

  const onAllChange = () =>
    setCheckList((prevList) => prevList.map((checkItem) => ({ ...checkItem, checked: !allCheck })));

  const onChange = (checked: boolean, id: CheckItemId) =>
    setCheckList((prevList) =>
      prevList.map((checkItem) => (id === checkItem.id ? { ...checkItem, checked } : checkItem))
    );

  return { checkList, checked: allCheck, isIndeterminate, onChange, onAllChange };
}

function ImplementedNestedCheckbox({
  checkList,
  text,
  checked,
  disabled,
  isIndeterminate,
  onChange,
  onAllChange,
}: ImplementedNestedCheckboxProps) {
  return (
    <div>
      <ParentCheckbox
        text={text}
        checked={checked}
        isIndeterminate={isIndeterminate}
        disabled={disabled}
        onChange={onAllChange}
      />
      <StyleNestedCheckList>
        {checkList.map((checkItem) => (
          <StyleNestedCheckItem key={checkItem.id}>
            <OutlineCheckbox
              onChange={(curChecked) => onChange?.(curChecked, checkItem.id)}
              {...checkItem}
              disabled={disabled || checkItem.disabled}
            />
          </StyleNestedCheckItem>
        ))}
      </StyleNestedCheckList>
    </div>
  );
}

const StyleNestedCheckList = styled.ul`
  list-style: none;

  margin: -2px 0 0 10px;
  padding: 0 0 0 20px;

  & > li + div {
    margin-top: -10px;
  }
`;

const StyleNestedCheckItem = styled.li`
  margin-top: -10px;
`;

export default ImplementedNestedCheckbox;
