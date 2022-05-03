import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';
import { configureMockStore } from "@jedmao/redux-mock-store";
import { createMemoryHistory } from "history";
import { appTheme } from '../app/common'
import HistoryRouter from "../common/history-router/history-router";
import { makeMockQuests } from "../../utils/mocks";
import NotFoundPage from "./not-found-page";


const mockStore = configureMockStore();
const mockQuests = makeMockQuests();

describe('Component: NotFoundPage', () => {
  const history = createMemoryHistory();
  history.push('/fake-page');
  const store = mockStore({
    QUESTS: {
      quests: mockQuests,
    },
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ThemeProvider theme={appTheme}>
            <NotFoundPage />
          </ThemeProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/множество квестов./i)).toBeInTheDocument();
  });
});

