import { Quest, Quests, Order } from '../types/main-types';


export const makeMockQuest = () : Quest => ({
  id: 1,
  title: 'mock title',
  description: 'mock description',
  previewImg: 'img',
  coverImg: 'img',
  type:'mock type',
  level: 'mock type',
  peopleCount: [3, 5],
  duration: 10,
});

export const makeMockQuests = () : Quests  => (
  [makeMockQuest()]
);

export const makeMockOrder = () : Order => (
  {
    name: 'mock name',
    peopleCount: 3,
    phone: 'mock phone',
    isLegal: true,
  }
)
