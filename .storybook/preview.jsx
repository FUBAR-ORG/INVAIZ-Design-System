import GlobalThemeProvider from "../src/themes/GlobalThemeProvider";

export const decorators = [
  (Story) => (
    <GlobalThemeProvider>
      <Story />
    </GlobalThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}