import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { appTheme } from '../../../app/common';
import HistoryRouter from '../../../common/history-router/history-router';
import { makeMockQuests } from '../../../../utils/mocks';
import { createMemoryHistory } from 'history';
import QuestsCatalog from './quests-catalog';


const mockStore = configureMockStore();
const history = createMemoryHistory();
history.push('/');
const mockQuests = makeMockQuests();
const store = mockStore({
  QUESTS: {quests: mockQuests},
});

const mockQuest = mockQuests[0];

describe('Component: QuestCatalog', () => {
  it('shoul render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ThemeProvider theme={appTheme}>
            <QuestsCatalog  />
          </ThemeProvider>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText('Все квесты')).toBeInTheDocument();
    expect(screen.getByText('Приключения')).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockQuest.title}`, 'i'))).toBeInTheDocument();
  });
});
