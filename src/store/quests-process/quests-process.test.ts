import { questsProcess } from './quests-process';
import { loadQuests } from './quests-process';
import { Quests } from '../../types/main-types';
import { makeMockQuests } from '../../utils/mocks';

const mockQuests = makeMockQuests();
const initialState = {
  quests: [] as Quests,
}

describe('Reduser: questsProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(questsProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({quests: [] as Quests});
  });

  it('should update quests by quests', () => {
    expect(questsProcess.reducer(initialState, loadQuests(mockQuests)))
    .toEqual({
      quests: mockQuests,
    });
  });
});
