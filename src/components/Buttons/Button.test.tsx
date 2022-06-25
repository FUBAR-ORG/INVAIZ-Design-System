import userEvent from '@testing-library/user-event';

import Button from '@components/Buttons/Button';
import { render } from '@tests/test-utils';

describe('Button Component', () => {
  it('Basic Button test', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>Button</Button>);
    const button = getByRole('button');
    userEvent.click(button);
    expect(onClick).toBeCalled();
  });
});
