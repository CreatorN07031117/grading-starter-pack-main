import {createSlice} from '@reduxjs/toolkit';
import {QuestType} from '../../const';
import {QuestsProcess, Quests, State} from '../../types/main-types';


const initialState: QuestsProcess = {
  activeType: QuestType.All,
  quests: [] as Quests,
};

export const questsProcess = createSlice({
  name: 'QUESTS',
  initialState,
  reducers: {
    selectType: (state, action) => {
      state.activeType = action.payload;
    },
    loadQuests: (state, action) => {
      state.quests = action.payload;
    },
    getQuests: (state) => {
      ({quests: state.quests} = state);
    },
  },
});

export const {selectType, loadQuests, getQuests} = questsProcess.actions;
