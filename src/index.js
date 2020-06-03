import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClockWithClasses from './ClockWithClasses';
import ClockWithHooks from './ClockWithHooks';


ReactDOM.render(
  <React.StrictMode>
    <ClockWithClasses />
    <hr />
    <ClockWithHooks />
  </React.StrictMode>,
  document.getElementById('root')
);


