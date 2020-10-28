import React from 'react';
import '../../App.css';
import Router from '../Router';
import { Main } from './styles';
import { BrowserRouter } from 'react-router-dom';

function AppContainer() {
  return (
    <Main className="App">
      <BrowserRouter>
        <>
          <Router />
        </>
      </BrowserRouter>
    </Main>
  );
}

export default AppContainer;
