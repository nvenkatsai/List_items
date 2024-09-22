import itemsReducer, { setSearchTerm } from './itemsSlice';

describe('itemsSlice', () => {
  const initialState = {
    items: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'],
    searchTerm: '',
  };

  it('should return the initial state when an unknown action is passed', () => {
    expect(itemsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setSearchTerm action', () => {
    const searchTerm = 'Banana';
    const expectedState = {
      ...initialState,
      searchTerm,
    };

    expect(itemsReducer(initialState, setSearchTerm(searchTerm))).toEqual(expectedState);
  });
});
