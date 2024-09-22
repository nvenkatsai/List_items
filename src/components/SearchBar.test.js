import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import SearchBar from './SearchBar';
import { setSearchTerm } from '../features/itemsSlice';

describe('SearchBar Component', () => {
  test('renders the search input field', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(/Search items.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test('dispatches the setSearchTerm action on input change', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(/Search items.../i);

    
    fireEvent.change(inputElement, { target: { value: 'Apple' } });

    const state = store.getState();
    expect(state.items.searchTerm).toBe('Apple');
  });
});
