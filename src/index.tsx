import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from '@styles/global.style';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
