import Checkbox from '@components/Checkboxs/Checkbox';
import { render } from '@tests/test-utils';

describe('Checkbox', () => {
  it('체크박스의 기본값 = false', () => {
    const { getByRole } = render(<Checkbox />);
    expect(getByRole('checkbox')).not.toBeChecked();
  });

  it('체크 박스 클릭', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Checkbox onChange={onChange} />);
    const checkbox = getByRole('checkbox');

    checkbox.click();
    expect(onChange).toHaveBeenCalled();
    expect(checkbox).toBeChecked();

    checkbox.click();
    expect(onChange).toHaveBeenCalled();
    expect(checkbox).not.toBeChecked();

    expect(onChange).toHaveBeenCalledWith({
      checked: true,
    });
  });
});
