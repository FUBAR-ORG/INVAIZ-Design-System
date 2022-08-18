import MultipleCheckbox from '@components/Checkboxes/MultipleCheckbox';
import { render } from '@tests/test-utils';

describe('MultipleCheckbox', () => {
  it('체크박스의 기본값은 `false`이며, 변경이 가능하다.', () => {
    const { getAllByRole } = render(
      <>
        <MultipleCheckbox />
        <MultipleCheckbox checked />
      </>
    );
    const [isNotChanged, isChanged] = getAllByRole('checkbox');

    expect(isNotChanged).not.toBeChecked();
    expect(isChanged).toBeChecked();
  });

  it('체크 박스는 클릭할 수 있으며, 클릭 시 `checked` 상태 변경이 가능하다.', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<MultipleCheckbox onChange={onChange} />);
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

  it('체크 박스는 `disabled`일 때, 상태 변경이 불가능하다.', () => {
    const { getByRole } = render(<MultipleCheckbox disabled />);
    const checkbox = getByRole('checkbox');

    checkbox.click();
    expect(checkbox).not.toBeChecked();
  });
});
