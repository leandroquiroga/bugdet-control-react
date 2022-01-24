import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/normalize.css/normalize.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ControlGastos } from './ControlGastos';

ReactDOM.render(
  <React.StrictMode>
    <ControlGastos />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
