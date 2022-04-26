import { createSlice } from '@reduxjs/toolkit';
import { QuestsProcess, Quests } from '../../types/main-types';


const initialState: QuestsProcess = {
  quests: [] as Quests,
};

export const questsProcess = createSlice({
  name: 'QUESTS',
  initialState,
  reducers: {
    loadQuests: (state, action) => {
      state.quests = action.payload;
    }
  },
});

export const { loadQuests } = questsProcess.actions;
