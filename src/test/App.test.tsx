import { render } from '@testing-library/react';
import App from '../App';

test('test', () => {
  const { getByTestId } = render(<App />);
  const testId = getByTestId('test-id');
  expect(testId.innerHTML).toMatch('Project init');
});
