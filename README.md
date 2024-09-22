# List_items

# install packages 
npm install @reduxjs/toolkit react-redux
npm install --save-dev @testing-library/react @testing-library/jest-dom

# How to Run
Ensure all dependencies are installed using npm install.
Run the application with npm start.
Visit http://localhost:3000 in your browser to see the app in action.
To run tests, use npm test.

# project overview
This is a simple React application that displays a list of items and allows users to filter the list through a search input. The project uses Redux Toolkit for state management and is optimized to avoid unnecessary re-renders by using techniques such as memoization (React.memo) and useSelector.

# Technologies
React: A JavaScript library for building user interfaces.
Redux Toolkit: For efficient and scalable state management.
React-Redux: To connect React components with Redux.
React.memo: To avoid unnecessary re-renders.
Jest & React Testing Library: For unit testing.

# App Structure
ItemList: Displays the list of items, filtered based on the search term.
SearchBar: A search input field for users to filter the items.
Item: Represents a single item in the list.

# Key Files:
src/app/store.js: Configures the Redux store.
src/features/itemsSlice.js: Defines the Redux slice for managing items and the search term.
src/components/ItemList.js: The list of items, filtered in real-time.
src/components/SearchBar.js: Input for filtering items.
src/components/Item.js: Displays individual items, memoized for performance optimization.

# Testing
Unit tests are provided for key components and the Redux slice:
