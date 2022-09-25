import { render } from '@tests/test-utils';
// test utils

import ImplementedNestedCheckbox, {
  useNestedCheckboxState,
} from '@components/Checkboxes/ImplementedNestedCheckbox';
// components

describe('ImplementedNestedCheckbox', () => {
  it('체크박스의 하위 요소는 `checkList` `props`를 통해 결정된다.', () => {
    const nestedCheckboxState = useNestedCheckboxState([
      { id: 1, checked: true, text: '' },
      { id: 2, checked: false, text: '' },
    ]);
    const falseCheckboxState = useNestedCheckboxState([
      { id: 1, checked: false, text: '' },
      { id: 2, checked: false, text: '' },
    ]);
    const trueCheckboxState = useNestedCheckboxState([
      { id: 1, checked: true, text: '' },
      { id: 2, checked: true, text: '' },
    ]);

    const { getAllByRole } = render(
      <>
        <ImplementedNestedCheckbox text='' {...nestedCheckboxState} />
        <ImplementedNestedCheckbox text='' {...falseCheckboxState} />
        <ImplementedNestedCheckbox text='' {...trueCheckboxState} />
      </>
    );
    const [, oneAndOne, oneAndTwo, , twoAndOne, twoAndTwo, , threeAndOne, threeAndTwo] =
      getAllByRole('checkbox');
    expect(oneAndOne).toBeChecked();
    expect(oneAndTwo).not.toBeChecked();

    expect(twoAndOne).not.toBeChecked();
    expect(twoAndTwo).not.toBeChecked();

    expect(threeAndOne).toBeChecked();
    expect(threeAndTwo).toBeChecked();
  });

  it('체크박스의 부모 `checked` 상태는 하위 체크박스의 `checked` 상태에 따라 결정되며, 하위 체크박스가 모두 `checked`일 때에만 `true`이다.', () => {
    const nestedCheckboxState = useNestedCheckboxState([
      { id: 1, checked: true, text: '' },
      { id: 2, checked: false, text: '' },
    ]);
    const falseCheckboxState = useNestedCheckboxState([
      { id: 1, checked: false, text: '' },
      { id: 2, checked: false, text: '' },
    ]);
    const trueCheckboxState = useNestedCheckboxState([
      { id: 1, checked: true, text: '' },
      { id: 2, checked: true, text: '' },
    ]);

    const { getAllByRole } = render(
      <>
        <ImplementedNestedCheckbox text='' {...nestedCheckboxState} />
        <ImplementedNestedCheckbox text='' {...falseCheckboxState} />
        <ImplementedNestedCheckbox text='' {...trueCheckboxState} />
      </>
    );
    const [isNested, , , isFalse, , , isTrue] = getAllByRole('checkbox');
    expect(isNested).not.toBeChecked();
    expect(isFalse).not.toBeChecked();
    expect(isTrue).toBeChecked();
  });

  it('체크박스의 부모는 클릭할 수 있으며, 클릭 시 하위 요소의 `checked` 상태도 함께 변경한다.', () => {
    const nestedCheckboxState = useNestedCheckboxState([
      { id: 1, checked: true, text: '' },
      { id: 2, checked: false, text: '' },
    ]);

    const { getAllByRole } = render(<ImplementedNestedCheckbox text='' {...nestedCheckboxState} />);
    const [isNested, one, two] = getAllByRole('checkbox');
    isNested.click();
    expect(nestedCheckboxState.onAllChange).toHaveBeenCalled();

    expect(one).toBeChecked();
    expect(two).toBeChecked();

    isNested.click();

    expect(one).not.toBeChecked();
    expect(two).not.toBeChecked();
  });

  it('체크박스의 하위 요소는 클릭할 수 있으며, `onChange` 함수에 자신의 id와 변경 상태를 포함하여 호출한다.', () => {
    const nestedCheckboxState = useNestedCheckboxState([
      { id: 1, checked: true, text: '' },
      { id: 2, checked: false, text: '' },
    ]);

    const { getAllByRole } = render(<ImplementedNestedCheckbox text='' {...nestedCheckboxState} />);
    const [isNested, one, two] = getAllByRole('checkbox');
    isNested.click();
    expect(nestedCheckboxState.onAllChange).toHaveBeenCalled();

    expect(one).toBeChecked();
    expect(two).toBeChecked();

    isNested.click();

    expect(one).not.toBeChecked();
    expect(two).not.toBeChecked();
  });
});
