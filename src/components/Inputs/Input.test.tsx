import { render } from '@tests/test-utils';

import Input from '@components/Inputs/Input';

describe('Input', () => {
  it('onClear에 내용이 있고 value에 값이 있으면 내용을 지우는 버튼이 렌더링된다.', () => {
    const onClear = jest.fn();
    const { getByRole } = render(<Input value='filled' onClear={onClear} />);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('required가 true이고 value에 값이 없으면 required icon이 렌더링된다.', () => {
    const { getByTestId } = render(<Input value='' required />);

    const requiredIcon = getByTestId('required-icon');

    expect(requiredIcon).toBeInTheDocument();
  });
});
