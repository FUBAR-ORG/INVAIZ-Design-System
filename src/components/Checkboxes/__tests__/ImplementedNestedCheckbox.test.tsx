import { render } from '@tests/test-utils';
import { create } from 'react-test-renderer';
// test utils

import ImplementedNestedCheckbox from '@components/Checkboxes/ImplementedNestedCheckbox';
// components

import GlobalThemeProvider from '@themes/GlobalThemeProvider';
// providers

const PARENT_TEXT = 'Parent Checkbox' as const;
const CHILDREN_TEXT = 'Children' as const;
// constant

describe('ImplementedNestedCheckbox', () => {
  it('체크박스의 하위 요소는 `checkList` `props`를 통해 결정된다.', () => {
    const nestedCheckboxList = [
      { id: 1, checked: true, text: CHILDREN_TEXT },
      { id: 2, checked: false, text: CHILDREN_TEXT },
    ];
    const falseCheckboxList = [
      { id: 1, checked: false, text: CHILDREN_TEXT },
      { id: 2, checked: false, text: CHILDREN_TEXT },
    ];
    const trueCheckboxList = [
      { id: 1, checked: true, text: CHILDREN_TEXT },
      { id: 2, checked: true, text: CHILDREN_TEXT },
    ];

    const { getAllByRole } = render(
      <>
        <ImplementedNestedCheckbox text={PARENT_TEXT} checkList={nestedCheckboxList} />
        <ImplementedNestedCheckbox text={PARENT_TEXT} checkList={falseCheckboxList} />
        <ImplementedNestedCheckbox text={PARENT_TEXT} checkList={trueCheckboxList} />
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
    const nestedCheckboxList = [
      { id: 1, checked: true, text: CHILDREN_TEXT },
      { id: 2, checked: false, text: CHILDREN_TEXT },
    ];
    const falseCheckboxList = [
      { id: 1, checked: false, text: CHILDREN_TEXT },
      { id: 2, checked: false, text: CHILDREN_TEXT },
    ];
    const trueCheckboxList = [
      { id: 1, checked: true, text: CHILDREN_TEXT },
      { id: 2, checked: true, text: CHILDREN_TEXT },
    ];

    const { getAllByRole } = render(
      <>
        <ImplementedNestedCheckbox text={PARENT_TEXT} checkList={nestedCheckboxList} />
        <ImplementedNestedCheckbox text={PARENT_TEXT} checkList={falseCheckboxList} />
        <ImplementedNestedCheckbox text={PARENT_TEXT} checkList={trueCheckboxList} />
      </>
    );
    const [isNested, , , isFalse, , ,] = getAllByRole('checkbox');
    expect(isNested).not.toBeChecked();
    expect(isFalse).not.toBeChecked();
    // expect(isTrue).toBeChecked();
  });

  it('체크박스의 부모는 클릭할 수 있으며, 클릭 시 하위 요소의 `checked` 상태도 함께 변경한다.', () => {
    const nestedCheckboxList = [
      { id: 1, checked: true, text: CHILDREN_TEXT },
      { id: 2, checked: false, text: CHILDREN_TEXT },
    ];

    const onAllChange = jest.fn();

    const { getAllByRole } = render(
      <ImplementedNestedCheckbox
        text={PARENT_TEXT}
        checkList={nestedCheckboxList}
        onAllChange={onAllChange}
      />
    );
    const [isNested, ,] = getAllByRole('checkbox');
    isNested.click();
    expect(onAllChange).toHaveBeenCalled();

    // expect(one).toBeChecked();
    // expect(two).toBeChecked();
    //
    // isNested.click();
    //
    // expect(one).not.toBeChecked();
    // expect(two).not.toBeChecked();
  });

  it('체크박스의 하위 요소는 클릭할 수 있으며, `onChange` 함수에 자신의 id와 변경 상태를 포함하여 호출한다.', () => {
    const nestedCheckboxList = [
      { id: 1, checked: true, text: CHILDREN_TEXT },
      { id: 2, checked: false, text: CHILDREN_TEXT },
    ];

    const onAllChange = jest.fn();
    const onChange = jest.fn();

    const { getAllByRole } = render(
      <ImplementedNestedCheckbox
        text={PARENT_TEXT}
        checkList={nestedCheckboxList}
        onAllChange={onAllChange}
        onChange={onChange}
      />
    );
    const [, one, two] = getAllByRole('checkbox');

    one.click();
    expect(onChange).toBeCalledWith(false, 1);
    two.click();
    expect(onChange).toBeCalledWith(true, 2);

    // expect(one).toBeChecked();
    // expect(two).toBeChecked();
    //
    // expect(one).not.toBeChecked();
    // expect(two).not.toBeChecked();
  });
});

test('ImplementedNestedCheckbox Snapshot', () => {
  const nestedCheckboxList = [
    { id: 1, checked: true, text: CHILDREN_TEXT },
    { id: 2, checked: false, text: CHILDREN_TEXT },
  ];

  const indeterminate = create(
    <GlobalThemeProvider>
      <ImplementedNestedCheckbox
        text={PARENT_TEXT}
        checkList={nestedCheckboxList}
        isIndeterminate
      />
    </GlobalThemeProvider>
  );
  expect(indeterminate).toMatchSnapshot();

  const determinate = create(
    <GlobalThemeProvider>
      <ImplementedNestedCheckbox text={PARENT_TEXT} checkList={nestedCheckboxList} />
    </GlobalThemeProvider>
  );
  expect(determinate).toMatchSnapshot();
});
