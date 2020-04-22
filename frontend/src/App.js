import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter history={history}>
      <GlobalStyle />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
