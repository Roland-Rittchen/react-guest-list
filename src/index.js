/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        ::after,
        ::before {
          color: #413d45;
          box-sizing: border-box;
          margin: 0;
          font-family: 'Apercu', sans-serif;
          letter-spacing: -0.01em;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
