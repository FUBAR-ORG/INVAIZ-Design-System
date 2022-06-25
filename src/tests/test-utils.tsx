import { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import GlobalThemeProvider from '@themes/GlobalThemeProvider';

function AllTheProviders({ children }: PropsWithChildren<unknown>) {
  return <GlobalThemeProvider>{children}</GlobalThemeProvider>;
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
