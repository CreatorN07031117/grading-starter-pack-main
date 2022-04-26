import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import { fetchQuestsAction, fetchQuest } from './api-actions';
import { loadQuests } from './quests-process/quests-process';
import { loadQuest } from './quest-process/quest-process';
import { APIRoute } from '../const';
import { State } from '../types/main-types';
import { makeMockQuest, makeMockQuests } from '../utils/mocks';


describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should dispatch loadQuests when GET quests', async () => {
    const mockQuests = makeMockQuests();

    mockAPI
      .onGet(APIRoute.Quests)
      .reply(200, mockQuests);

    const store = mockStore();
    await store.dispatch(fetchQuestsAction());

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadQuests.toString());
  });

  it('should dispatch loadQuest when GET quest', async () => {
    const mockQuest = makeMockQuest();
    const mockId = '1';

    mockAPI
    .onGet(`${APIRoute.Quest}${mockId}`)
    .reply(200, mockQuest);

    const store = mockStore();
    await store.dispatch(fetchQuest(mockId));

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadQuest.toString());
  });
});
