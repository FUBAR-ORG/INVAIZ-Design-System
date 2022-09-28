import TextButton from '@components/Buttons/TextButton';
import { render } from '@tests/test-utils';

describe('Button Component', () => {
  it('Text Button test', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<TextButton onClick={() => console.log('hello')} />);
    const button = getByRole('button');
    button.click();
    expect(onClick).toBeCalled();
  });
});
