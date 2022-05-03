import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { appTheme } from '../app/common';
import Home from './home';
import HistoryRouter from '../common/history-router/history-router';
import { makeMockQuests } from '../../utils/mocks';
import { createMemoryHistory } from 'history';


const mockStore = configureMockStore();
const history = createMemoryHistory();
history.push('/');
const mockQuests = makeMockQuests();
const store = mockStore({
  QUESTS: {quests: mockQuests},
});

describe('Component: Home', () => {
  it('shoul render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ThemeProvider theme={appTheme}>
            <Home  />
          </ThemeProvider>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText('Выберите тематику')).toBeInTheDocument();
  });
});


