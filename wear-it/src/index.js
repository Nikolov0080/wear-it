import React from 'react';
import ReactDOM from 'react-dom';
import PageRouter from './PageRouter';
import reportWebVitals from './reportWebVitals';
import UserContext from './context/UserContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
        <PageRouter />
    </UserContext>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();