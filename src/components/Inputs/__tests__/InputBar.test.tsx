import { fireEvent, render } from '@tests/test-utils';

import InputBar from '@components/Inputs/InputBar';

describe('Input Bar', () => {
  it('onChange로 value 값이 바뀐다.', () => {
    const INPUT_TEST = 'Input Test';
    const onChange = jest.fn();

    const { getByRole } = render(<InputBar onChange={onChange} />);

    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: INPUT_TEST } });

    if (input instanceof HTMLInputElement) {
      expect(input.value).toBe(INPUT_TEST);
    }
  });
});
