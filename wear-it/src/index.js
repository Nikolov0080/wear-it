import React from 'react';
import ReactDOM from 'react-dom';
import PageRouter from './PageRouter';
import reportWebVitals from './reportWebVitals';
import UserContext from './context/UserContext';
import Layout from './pages/layout';


ReactDOM.render(
  <React.StrictMode>
    <UserContext>
      <Layout>
        <PageRouter />
      </Layout>
    </UserContext>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();