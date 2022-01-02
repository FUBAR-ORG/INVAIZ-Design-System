import React from 'react';
import ReactDOM from 'react-dom';
import GlobalThemeProvider from '@theme/GlobalThemeProvider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalThemeProvider>
      <App />
    </GlobalThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
