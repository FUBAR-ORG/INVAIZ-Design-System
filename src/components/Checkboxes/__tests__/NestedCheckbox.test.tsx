import { create } from 'react-test-renderer';
// test utils

import NestedCheckbox from '@components/Checkboxes/NestedCheckbox';
// components

import GlobalThemeProvider from '@themes/GlobalThemeProvider';
// providers

test('NestedCheckbox Snapshot', () => {
  const indeterminate = create(
    <GlobalThemeProvider>
      <NestedCheckbox text='Parent Checkbox' isIndeterminate>
        <NestedCheckbox.Item text='Children' />
      </NestedCheckbox>
    </GlobalThemeProvider>
  );
  expect(indeterminate).toMatchSnapshot();

  const determinate = create(
    <GlobalThemeProvider>
      <NestedCheckbox text='Parent Checkbox' isIndeterminate>
        <NestedCheckbox.Item text='Children' />
      </NestedCheckbox>
    </GlobalThemeProvider>
  );
  expect(determinate).toMatchSnapshot();
});
