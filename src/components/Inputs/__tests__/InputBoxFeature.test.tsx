import { render } from '@tests/test-utils';

import InputBoxFeature from '@components/Inputs/InputBoxFeature';

describe('Input Box', () => {
  it('clearable이 true이고 value에 값이 있으면 버튼이 렌더링된다.', () => {
    const { getByRole } = render(<InputBoxFeature value='filled' clearable />);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('required가 true이고 value에 값이 없으면 required icon이 렌더링된다.', () => {
    const { getByTestId } = render(<InputBoxFeature value='filled' required />);

    const requiredIcon = getByTestId('required-icon');

    expect(requiredIcon).toBeInTheDocument();
  });
});
