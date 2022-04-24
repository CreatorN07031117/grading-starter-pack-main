import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State, Quests, Order } from '../types/main-types';
import { redirectToRoute } from './action';
import { loadQuests } from './quests-process/quests-process';
import { loadQuest } from './quest-process/quest-process';
import { errorHandle } from '../services/error-handle';


export const fetchQuestsAction = createAsyncThunk <void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchQuests',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Quests>('/quests');
    dispatch(loadQuests(data));
  }
);

export const fetchQuest = createAsyncThunk <void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchQuests',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(`/quests/${id}`);
      dispatch(loadQuest(data));
    } catch (error) {
      dispatch(redirectToRoute('/*'));
    }
  },
);

export const postOrder = createAsyncThunk<void, Order, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/postOrder',
  async ({name, peopleCount, phone, isLegal}, {dispatch, extra: api}) => {
    try {
      await api.post(`/orders`, {name, peopleCount, phone, isLegal});

    } catch (error) {
      errorHandle(error);
    }
  },
);
