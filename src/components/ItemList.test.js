import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import ItemList from './ItemList';
import { setSearchTerm } from '../features/itemsSlice';

describe('ItemList Component', () => {
  test('renders the list of items', () => {
    render(
      <Provider store={store}>
        <ItemList />
      </Provider>
    );


    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    expect(screen.getByText(/Banana/i)).toBeInTheDocument();
    expect(screen.getByText(/Cherry/i)).toBeInTheDocument();
  });

  test('filters items based on search term', () => {
    
    store.dispatch(setSearchTerm('Banana'));

    render(
      <Provider store={store}>
        <ItemList />
      </Provider>
    );

    
    expect(screen.getByText(/Banana/i)).toBeInTheDocument();
    expect(screen.queryByText(/Apple/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Cherry/i)).not.toBeInTheDocument();
  });
});
