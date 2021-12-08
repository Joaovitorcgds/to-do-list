import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import {ToDo} from "./ToDo"


ReactDOM.render(
  <React.StrictMode>
    <ToDo/>
  </React.StrictMode>,
  document.getElementById('root')
);

