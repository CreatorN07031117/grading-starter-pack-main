import {createSlice} from '@reduxjs/toolkit';
import {QuestProcess, Quest} from '../../types/main-types';


const initialState: QuestProcess = {
  quest: {} as Quest,
  isDataLoaded: false,
};

export const questProcess = createSlice({
  name: 'QUEST',
  initialState,
  reducers: {
    loadQuest: (state, action) => {
      state.quest = action.payload;
      state.isDataLoaded = true;
    },
    getQuest: (state) => {
      ({quest: state.quest} = state);
    },
  },
});

export const {loadQuest} = questProcess.actions;
