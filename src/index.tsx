import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalThemeProvider from '@themes/GlobalThemeProvider';
import App from './App';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <GlobalThemeProvider>
      <App />
    </GlobalThemeProvider>
  </React.StrictMode>
);
