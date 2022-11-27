import { render } from '@tests/test-utils';
import { create } from 'react-test-renderer';
// test utils

import FillCheckbox from '@components/Checkboxes/FillCheckbox';
// components

import GlobalThemeProvider from '@themes/GlobalThemeProvider';
// providers

describe('FillCheckbox', () => {
  it('체크박스의 기본값은 `false`이며, 변경이 가능하다.', () => {
    const { getAllByRole } = render(
      <>
        <FillCheckbox />
        <FillCheckbox checked />
      </>
    );
    const [isNotChanged, isChanged] = getAllByRole('checkbox');

    expect(isNotChanged).not.toBeChecked();
    expect(isChanged).toBeChecked();
  });

  it('체크박스는 클릭할 수 있으며, 클릭 시 `checked` 상태 변경이 가능하다.', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<FillCheckbox onChange={onChange} />);
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

  it('체크박스는 `disabled`일 때, 상태 변경이 불가능하다.', () => {
    const { getByRole } = render(<FillCheckbox disabled />);
    const checkbox = getByRole('checkbox');

    checkbox.click();
    expect(checkbox).not.toBeChecked();
  });
});

test('FillCheckbox Snapshot', () => {
  const checked = create(
    <GlobalThemeProvider>
      <FillCheckbox checked />
    </GlobalThemeProvider>
  );
  expect(checked).toMatchSnapshot();

  const unChecked = create(
    <GlobalThemeProvider>
      <FillCheckbox />
    </GlobalThemeProvider>
  );
  expect(unChecked).toMatchSnapshot();
});
