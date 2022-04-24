import {store} from '../store/store';


export type Quest = {
  id: number
  title: string;
  description: string;
  previewImg: string;
  coverImg: string;
  type: string;
  level: string;
  peopleCount: number[];
  duration: number;
};

export type Quests = Quest[];

export type Order = {
  name: string;
  peopleCount: number;
  phone: string;
  isLegal: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type QuestsProcess = {
  activeType: string;
  quests: Quests,
};

export type QuestProcess = {
  quest: Quest,
};

export type ErrorType = unknown;
