import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GlobalStyle from './design/global-style';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
