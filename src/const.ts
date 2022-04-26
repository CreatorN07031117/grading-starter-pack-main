export enum QuestType {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
};

export const QUEST_TYPE_NAMES = [
  {
    key: QuestType.Adventures,
    value: 'приключения'
  },
  {
    key: QuestType.Horror,
    value: 'ужасы'
  },
  {
    key: QuestType.Mystic,
    value: 'мистика'
  },
  {
    key: QuestType.Detective,
    value: 'детектив'
  },
  {
    key: QuestType.SciFi,
    value: 'sci-fi'
  },
]

export const LEVELS = [
  {
    key: 'hard',
    value: 'сложный'
  },
  {
    key: 'medium',
    value: 'средний'
  },
{
    key: 'easy',
    value: 'легкий'
  }
]

export const BACKEND_URL = 'http://localhost:3001';

export const REQUEST_TIMEOUT = 5000;

export const enum HTTPCode {
  BadRequest = 400,
  NotFound= 404,
}

export const ADDRESS_POINT = {
  lat: 59.968278,
  lng: 30.316173,
  zoom: 17
}

export const enum AppRoute {
  Index = '/',
  Contacts = '/contacts',
  Quest = '/detailed-quest/:id',
  CoomingSoon = '/cooming-soon',
  NotFound = '*'
}

export const enum APIRoute {
  Quests = '/quests',
  Quest = '/quests/',
  Orders = '/orders',
}
