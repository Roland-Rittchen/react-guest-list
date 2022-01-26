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
          color: white;
          box-sizing: border-box;
          margin: 0;
          font-family: sans-serif;
        }

        li {
          padding: 10px;
          background-color: #53555e;
          list-style-type: none;
          margin: 12px;
          border-radius: 8px;
        }

        label {
          margin: 4px 8px;
          text-align: center;
        }

        button {
          background-color: #4e86bd;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 4px;
          transition-duration: 0.4s;
        }
        button:hover {
          background-color: #a6c2de;
        }
        button:active {
          background-color: #a6c2de;
          color: rgba(40, 41, 54, 1);
        }
        input {
          color: white;
          background-color: #919298;
          border: 2px #a6c2de;
          border-radius: 4px;
          padding: 12px 20px;
          margin: 8px 8px;
        }
        input:focus {
          background-color: #a6c2de;
          color: rgba(40, 41, 54, 1);
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
