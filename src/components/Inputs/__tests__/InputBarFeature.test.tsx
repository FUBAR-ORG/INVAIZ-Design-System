import { render } from '@tests/test-utils';

import InputBarFeature from '@components/Inputs/InputBarFeature';

describe('Input Bar Feature', () => {
  it('clearable이 true이고 value에 값이 있으면 버튼이 렌더링된다.', () => {
    const onClear = jest.fn();
    const { getByRole } = render(<InputBarFeature value='filled' onClear={onClear} />);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('required가 true이고 value에 값이 없으면 required icon이 렌더링된다.', () => {
    const { getByTestId } = render(<InputBarFeature value='' required />);

    const requiredIcon = getByTestId('required-icon');

    expect(requiredIcon).toBeInTheDocument();
  });
});
