import OutlineCheckbox from '@components/Checkboxes/OutlineCheckbox';
import { render } from '@tests/test-utils';

describe('OutlineCheckbox', () => {
  it('체크 박스의 기본값은 `false`이며, 변경이 가능하다.', () => {
    const { getAllByRole } = render(
      <>
        <OutlineCheckbox text='TEXT' />
        <OutlineCheckbox text='TEXT' checked />
      </>
    );
    const [isNotChanged, isChanged] = getAllByRole('checkbox');

    expect(isNotChanged).not.toBeChecked();
    expect(isChanged).toBeChecked();
  });

  it('체크 박스는 클릭할 수 있으며, 클릭 시 `checked` 상태 변경이 가능하다.', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<OutlineCheckbox text='TEXT' onChange={onChange} />);
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

  it('체크 박스는 텍스트 영역을 클릭하여도 상태 변경이 가능하다.', () => {
    const TEXT_AREA = 'Text Area';
    const { getByRole, getByText } = render(<OutlineCheckbox text={TEXT_AREA} />);

    const checkbox = getByRole('checkbox');
    const textArea = getByText(TEXT_AREA);

    textArea.click();
    expect(checkbox).toBeChecked();
  });

  it('체크 박스는 `disabled`일 때, 상태 변경이 불가능하다.', () => {
    const { getByRole } = render(<OutlineCheckbox text='TEXT' disabled />);
    const checkbox = getByRole('checkbox');

    checkbox.click();
    expect(checkbox).not.toBeChecked();
  });
});
