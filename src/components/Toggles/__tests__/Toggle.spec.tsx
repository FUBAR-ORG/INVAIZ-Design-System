import Toggle from '@components/Toggles/Toggle';
import { render } from '@tests/test-utils';
import { create } from 'react-test-renderer';
import GlobalThemeProvider from '@themes/GlobalThemeProvider';

describe('Toggle', () => {
  it('토글의 초기값은 false로 설정된다.', () => {
    const { getByRole } = render(<Toggle />);
    expect(getByRole('checkbox')).not.toBeChecked();
  });

  it('토글의 상태를 제어할 수 있다.', () => {
    const { getAllByRole } = render(
      <>
        <Toggle checked={false} />
        <Toggle checked />
      </>
    );
    const [first, second] = getAllByRole('checkbox');
    expect(first).not.toBeChecked();
    expect(second).toBeChecked();
  });

  it('토글을 클릭할 수 있다.', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Toggle onChange={onChange} />);
    const checkbox = getByRole('checkbox');

    checkbox.click();
    expect(onChange).toHaveBeenCalledWith(true);
    expect(checkbox).toBeChecked();

    checkbox.click();
    expect(onChange).toHaveBeenCalledWith(false);
    expect(checkbox).not.toBeChecked();
  });
});

test('Toggle Snapshot', () => {
  const checked = create(
    <GlobalThemeProvider>
      <Toggle checked />
    </GlobalThemeProvider>
  ).toJSON();
  expect(checked).toMatchSnapshot();

  const unChecked = create(
    <GlobalThemeProvider>
      <Toggle />
    </GlobalThemeProvider>
  ).toJSON();
  expect(unChecked).toMatchSnapshot();
});
