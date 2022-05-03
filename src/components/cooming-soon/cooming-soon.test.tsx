import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { appTheme } from '../app/common';
import HistoryRouter from '../common/history-router/history-router';
import { makeMockQuests } from '../../utils/mocks';
import { createMemoryHistory } from 'history';
import { AppRoute } from '../../const';
import CoomingSoon from './cooming-soon';

const history = createMemoryHistory();
history.push(AppRoute.CoomingSoon);

describe('Component: CoomingSoon', () => {
  it('shoul render correctly', () => {
    render(
        <HistoryRouter history={history}>
          <ThemeProvider theme={appTheme}>
            <CoomingSoon  />
          </ThemeProvider>
        </HistoryRouter>);

    expect(screen.getByText('Страница в разработке')).toBeInTheDocument();
  });
});
