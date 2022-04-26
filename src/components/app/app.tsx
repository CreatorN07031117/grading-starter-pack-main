import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import CoomingSoon from '../cooming-soon/cooming-soon';
import NotFoundPage from '../not-found-page/not-found-page';
import { AppRoute } from '../../const';
import { appTheme } from './common';
import * as S from './app.styled';

function App (): JSX.Element {

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Routes>
          <Route path={AppRoute.Index} element={<Home />} />
          <Route path={AppRoute.Quest} element={<DetailedQuest />} />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
          <Route path={AppRoute.CoomingSoon} element={<CoomingSoon />} />
          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
