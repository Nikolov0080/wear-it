import React from 'react';
import ReactDOM from 'react-dom';
import PageRouter from './PageRouter';
import reportWebVitals from './reportWebVitals';
import ContextConsumer from './context/ContextConsumer';


ReactDOM.render(
  <React.StrictMode>
    <ContextConsumer>
      <PageRouter />
    </ContextConsumer>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();