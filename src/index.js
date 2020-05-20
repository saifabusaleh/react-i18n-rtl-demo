import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import i18n from "./i18n/i18n";

ReactDOM.render(
  <React.StrictMode>
    <App i18n={i18n}/>
  </React.StrictMode>,
  document.getElementById('root')
);

