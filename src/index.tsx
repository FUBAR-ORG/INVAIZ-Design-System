import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from '@theme/GlobalStyle';
import GlobalThemeProvider from '@theme/GlobalThemeProvider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalThemeProvider>
      <App />
      <GlobalStyle />
    </GlobalThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
