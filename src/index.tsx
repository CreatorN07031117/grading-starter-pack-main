import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import browserHistory from './browser-history';
import HistoryRouter from '../src/components/common/history-router/history-router';
import { fetchQuestsAction } from './store/api-actions';
import App from './components/app/app';


store.dispatch(fetchQuestsAction());


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
