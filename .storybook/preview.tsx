import type { Story as StoryComponent } from '@storybook/react';
import GlobalThemeProvider from '../src/themes/GlobalThemeProvider';

export const decorators = [
  (Story: StoryComponent) => (
    <GlobalThemeProvider>
      <Story />
    </GlobalThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
