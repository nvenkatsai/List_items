import { render, screen } from '@testing-library/react';
import App from './App'; 
test('renders the item list heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Item List/i);
  expect(headingElement).toBeInTheDocument();
});

