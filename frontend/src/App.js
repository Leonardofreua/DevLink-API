import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Header from './components/Header';
import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
