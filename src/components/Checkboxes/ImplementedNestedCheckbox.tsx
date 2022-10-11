import { type ComponentProps, useState, useMemo } from 'react';
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
  /**
   * 렌더링하기 위한 체크박스의 데이터 리스트입니다.
   */
  checkList: CheckList;
  /**
   * 하위 체크박스 체크 상태를 변경하는 이벤트 리스너입니다.
   *
   * * `useNestedCheckboxState` 훅을 사용하여 가져온 객체 내의 함수를 그대로 사용할 수 있습니다.
   *
   * @param checked 변경 후의 체크 상태를 매개 변수로 입력 받습니다.
   * @param id 변경된 체크박스의 `id` 식별자 값을 매개 변수로 입력 받습니다.
   */
  onChange?: (checked: boolean, id: CheckItemId) => void;
  /**
   * 모든 하위 체크박스 체크 상태를 변경하는 이벤트 리스너입니다.
   *
   * * `useNestedCheckboxState` 훅을 사용하여 가져온 객체 내의 함수를 그대로 사용할 수 있습니다.
   */
  onAllChange?: () => void;
}

/**
 * `ImplementedNestedCheckbox`의 내부 구현 리스너들을 만들어주는 커스텀 훅입니다.
 *
 * 체크박스 데이터 리스트를 통해 `AllChecked`(전체 체크 상태), `isIndeterminate`(불완전한 상태), `onChange`, `onAllChange`를 만들어 내보냅니다.
 * `checkList`를 함께 내보내며, 이는 위의 `onChange`, `onAllChange` 이벤트 리스너를 통해 관리되는 상태입니다.
 */
export const useNestedCheckboxState = (
  initCheckList: CheckList
): Omit<ImplementedNestedCheckboxProps, 'text' | 'disabled'> => {
  const [checkList, setCheckList] = useState<CheckList>(initCheckList);

  const allCheck = useMemo(
    () => checkList.every(({ checked, disabled }) => disabled || checked),
    [checkList]
  );

  const isIndeterminate = useMemo(
    () => !allCheck && checkList.some(({ checked, disabled }) => !disabled && checked),
    [checkList, allCheck]
  );

  const onChange = (checked: boolean, id: CheckItemId) =>
    setCheckList((prevList) =>
      prevList.map((checkItem) => (id === checkItem.id ? { ...checkItem, checked } : checkItem))
    );

  const onAllChange = () =>
    setCheckList((prevList) =>
      prevList.map((checkItem) =>
        checkItem.disabled ? checkItem : { ...checkItem, checked: !allCheck }
      )
    );

  return { checkList, checked: allCheck, isIndeterminate, onChange, onAllChange };
};

/**
 * 계층 구조를 표현할 수 있는 체크박스 리스트 컴포넌트입니다.
 */
const ImplementedNestedCheckbox = ({
  checkList,
  text,
  checked,
  disabled,
  isIndeterminate,
  onChange,
  onAllChange,
}: ImplementedNestedCheckboxProps) => (
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
