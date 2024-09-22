





import { store } from './store';
import { setSearchTerm } from '../features/itemsSlice';

describe('Redux Store', () => {
  test('should set searchTerm in state when setSearchTerm action is dispatched', () => {
   
    store.dispatch(setSearchTerm('Banana'));

    const state = store.getState();
    expect(state.items.searchTerm).toBe('Banana');
  });
});
