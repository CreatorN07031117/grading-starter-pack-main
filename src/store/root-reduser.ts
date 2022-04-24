import {combineReducers} from '@reduxjs/toolkit';
import { questProcess } from './quest-process/quest-process';
import { questsProcess } from './quests-process/quests-process';


export const rootReducer = combineReducers({
  QUESTS: questsProcess.reducer,
  QUEST: questProcess.reducer,
});
