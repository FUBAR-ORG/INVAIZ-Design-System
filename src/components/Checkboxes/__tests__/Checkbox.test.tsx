import Checkbox from '@components/Checkboxes/Checkbox';
import { render } from '@tests/test-utils';

describe('Checkbox', () => {
  it('체크박스의 기본값은 `false`이며, 변경이 가능하다.', () => {
    const { getAllByRole } = render(
      <>
        <Checkbox />
        <Checkbox checked />
      </>
    );
    const [isNotChanged, isChanged] = getAllByRole('checkbox');

    expect(isNotChanged).not.toBeChecked();
    expect(isChanged).toBeChecked();
  });

  it('체크 박스는 클릭할 수 있으며, 클릭 시 `checked` 상태 변경이 가능하다.', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Checkbox onChange={onChange} />);
    const checkbox = getByRole('checkbox');

    expect(onChange).not.toHaveBeenCalled();

    checkbox.click();
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          checked: true,
        }),
      })
    );
    expect(checkbox).toBeChecked();

    checkbox.click();
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          checked: false,
        }),
      })
    );
    expect(checkbox).not.toBeChecked();

    expect(onChange).toHaveBeenCalled();
  });

  it('체크 박스는 텍스트 영역을 클릭하여도 상태 변경이 가능하다.', () => {
    const TEXT_AREA = 'Text Area';
    const { getByRole, getByText } = render(<Checkbox text={TEXT_AREA} />);

    const checkbox = getByRole('checkbox');
    const textArea = getByText(TEXT_AREA);

    textArea.click();
    expect(checkbox).toBeChecked();
  });

  it('체크 박스는 `disabled`일 때, 상태 변경이 불가능하다.', () => {
    const { getByRole } = render(<Checkbox disabled />);
    const checkbox = getByRole('checkbox');

    checkbox.click();
    expect(checkbox).not.toBeChecked();
  });
});
