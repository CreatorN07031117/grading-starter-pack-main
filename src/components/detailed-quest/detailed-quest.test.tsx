import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { appTheme } from '../app/common';
import DetailedQuest from './detailed-quest';
import HistoryRouter from '../common/history-router/history-router';
import { makeMockQuest } from '../../utils/mocks';
import { createMemoryHistory } from 'history';


const mockStore = configureMockStore();
const history = createMemoryHistory();
history.push('/');
const mockQuest = makeMockQuest();
const store = mockStore({
  QUEST: {quest: mockQuest, isDataLoaded: true},
});

describe('Component: Home', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ThemeProvider theme={appTheme}>
            <DetailedQuest  />
          </ThemeProvider>
        </HistoryRouter>
      </Provider>);

      expect(screen.getByText(new RegExp(`${mockQuest.title}`, 'i'))).toBeInTheDocument();
      expect(screen.getByText('Забронировать')).toBeInTheDocument();
  });

  it('should render order form', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ThemeProvider theme={appTheme}>
            <DetailedQuest  />
          </ThemeProvider>
        </HistoryRouter>
      </Provider>);

    userEvent.click(screen.getByTestId('booking-btn'));

    expect(screen.getByText('Оставить заявку')).toBeInTheDocument();
  });
});
