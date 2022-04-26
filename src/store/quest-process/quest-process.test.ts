import { questProcess } from './quest-process';
import { loadQuest } from './quest-process';
import { Quest } from '../../types/main-types';
import { makeMockQuest } from '../../utils/mocks';


const mockQuest = makeMockQuest();
const initialState = {
  quest: {} as Quest,
  isDataLoaded: false,
};

describe('Reduser: questProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(questProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        quest: {} as Quest,
        isDataLoaded: false,
      });
  });

  it('should update quest by quest and isDataLoad should be true', () => {
    expect(questProcess.reducer(initialState, loadQuest(mockQuest)))
    .toEqual({
      quest: mockQuest,
      isDataLoaded: true,
    });
  });
});

