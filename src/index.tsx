import React from 'react';
import ReactDOM from 'react-dom';
import GlobalThemeProvider from '@themes/GlobalThemeProvider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalThemeProvider colorTheme='dark'>
      <App />
    </GlobalThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
