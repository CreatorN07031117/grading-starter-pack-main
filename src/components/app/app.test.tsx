import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../common/history-router/history-router';
import { AppRoute } from '../../const';
import App from './app';
import { makeMockQuests, makeMockQuest } from '../../utils/mocks';

const mockStore = configureMockStore();
const mockQuest = makeMockQuest();
const mockQuests = makeMockQuests();

const store = mockStore({
  QUESTS: {quests: mockQuests},
  QUEST: {
    quest: mockQuest,
    isDataLoaded: true,
  }
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "Home" when user navigate to "/"', () => {
    history.push(AppRoute.Index);

    render(fakeApp);

    expect(screen.getByText('квесты в Санкт-Петербурге')).toBeInTheDocument();
    expect(screen.getByText('Выберите тематику')).toBeInTheDocument();
  });

  it('should render "Contacts" when user navigate to "/contacts"', () => {
    history.push(AppRoute.Contacts);

    render(fakeApp);

    expect(screen.getByText('Режим работы')).toBeInTheDocument();
  });

  it('should render "Quest" when user navigate to "/quest/id"', () => {
    history.push('/detailed-quest/1');

    render(fakeApp);

    expect(screen.getByText(new RegExp(`${mockQuest.title}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText('Забронировать')).toBeInTheDocument();
  });

  it('should render "CoomingSoon" when user navigate to "cooming-soon', () => {
    history.push(AppRoute.CoomingSoon);

    render(fakeApp);

    expect(screen.getByText('Страница в разработке')).toBeInTheDocument();
  });

  it('should render "PageNotFounf" when user navigate to not existent page', () => {
    history.push('/fake-page');

    render(fakeApp);

    expect(screen.getByText('Страница не найдена')).toBeInTheDocument();
  })
});

