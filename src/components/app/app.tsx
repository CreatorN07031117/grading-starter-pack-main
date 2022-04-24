import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import NotFoundPage from '../not-found-page/not-found-page';
import { appTheme } from './common';
import * as S from './app.styled';

function App (): JSX.Element {

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='detailed-quest/:id' element={<DetailedQuest />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
