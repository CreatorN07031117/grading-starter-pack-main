import {createSlice} from '@reduxjs/toolkit';
import {QuestProcess, Quest} from '../../types/main-types';


const initialState: QuestProcess = {
  quest: {} as Quest,
};

export const questProcess = createSlice({
  name: 'QUEST',
  initialState,
  reducers: {
    loadQuest: (state, action) => {
      state.quest = action.payload;
    },
  },
});

export const {loadQuest} = questProcess.actions;
