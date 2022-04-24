export enum QuestType {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
};

export enum QuestTypeName {
  All = 'Все квесты',
  Adventures = 'Приключения',
  Horror = 'Ужасы',
  Mystic = 'Мистика',
  Detective = 'Детектив',
  SciFi = 'Sci-fi'
};

export const BACKEND_URL = 'http://localhost:3001';

export const REQUEST_TIMEOUT = 5000;

export const enum HTTPCode {
  BadRequest = 400,
  NotFound= 404,
}
