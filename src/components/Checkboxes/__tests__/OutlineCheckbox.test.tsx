import { render } from '@tests/test-utils';
import { create } from 'react-test-renderer';
// test utils

import OutlineCheckbox from '@components/Checkboxes/OutlineCheckbox';
// components

import GlobalThemeProvider from '@themes/GlobalThemeProvider';
// providers

const OUTLINE_TEXT = 'Outline Checkbox' as const;
// constants

describe('OutlineCheckbox', () => {
  it('체크박스의 기본값은 `false`이며, 변경이 가능하다.', () => {
    const { getAllByRole } = render(
      <>
        <OutlineCheckbox text={OUTLINE_TEXT} />
        <OutlineCheckbox text={OUTLINE_TEXT} checked />
      </>
    );
    const [isNotChanged, isChanged] = getAllByRole('checkbox');

    expect(isNotChanged).not.toBeChecked();
    expect(isChanged).toBeChecked();
  });

  it('체크박스는 클릭할 수 있으며, 클릭 시 `checked` 상태 변경이 가능하다.', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<OutlineCheckbox text={OUTLINE_TEXT} onChange={onChange} />);
    const checkbox = getByRole('checkbox');

    expect(onChange).not.toHaveBeenCalled();

    checkbox.click();
    expect(onChange).toHaveBeenCalledWith(true);
    expect(checkbox).toBeChecked();

    checkbox.click();
    expect(onChange).toHaveBeenCalledWith(false);
    expect(checkbox).not.toBeChecked();

    expect(onChange).toHaveBeenCalled();
  });

  it('체크박스는 텍스트 영역을 클릭하여도 상태 변경이 가능하다.', () => {
    const { getByRole, getByText } = render(<OutlineCheckbox text={OUTLINE_TEXT} />);

    const checkbox = getByRole('checkbox');
    const textArea = getByText(OUTLINE_TEXT);

    textArea.click();
    expect(checkbox).toBeChecked();
  });

  it('체크박스는 `disabled`일 때, 상태 변경이 불가능하다.', () => {
    const { getByRole } = render(<OutlineCheckbox text={OUTLINE_TEXT} disabled />);
    const checkbox = getByRole('checkbox');

    checkbox.click();
    expect(checkbox).not.toBeChecked();
  });
});

test('OutlineCheckbox Snapshot', () => {
  const checked = create(
    <GlobalThemeProvider>
      <OutlineCheckbox text={OUTLINE_TEXT} checked />
    </GlobalThemeProvider>
  );
  expect(checked).toMatchSnapshot();

  const unChecked = create(
    <GlobalThemeProvider>
      <OutlineCheckbox text={OUTLINE_TEXT} />
    </GlobalThemeProvider>
  );
  expect(unChecked).toMatchSnapshot();
});
