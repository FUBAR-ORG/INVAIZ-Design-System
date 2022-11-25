import { render } from '@tests/test-utils';

import Input from '@components/Inputs/Input';

describe('Input', () => {
  const VALUE = 'filled';
  const onClear = jest.fn();

  it('clearable이 true일 때 value에 값이 없으면 내용을 지우는 버튼이 렌더링되지 않는다.', () => {
    const { queryByRole } = render(<Input value='' onClear={onClear} />);

    const button = queryByRole('button');

    expect(button).toBeNull();
  });

  it('clearable이 true일 때 value에 값이 있으면 내용을 지우는 버튼이 렌더링된다.', () => {
    const { getByRole } = render(<Input value={VALUE} onClear={onClear} />);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('required가 true일 때 value에 값이 없으면 required icon이 렌더링된다.', () => {
    const { getByTestId } = render(<Input value='' required />);

    const requiredIcon = getByTestId('required-icon');

    expect(requiredIcon).toBeInTheDocument();
  });

  it('required가 true일 때 value에 값이 있으면 required icon이 렌더링되지 않는다.', () => {
    const { queryByTestId } = render(<Input value={VALUE} required />);

    const requiredIcon = queryByTestId('required-icon');

    expect(requiredIcon).toBeNull();
  });
});
