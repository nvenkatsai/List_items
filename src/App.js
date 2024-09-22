import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Item List</h1>
        <SearchBar />
        <ItemList />
      </div>
    </Provider>
  );
};

export default App;
