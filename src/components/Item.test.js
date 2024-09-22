
import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './Item';

describe('Item Component', () => {
  test('renders the item correctly', () => {
    const item = 'Banana';

    render(<Item item={item} />);

   
    expect(screen.getByText(item)).toBeInTheDocument();
  });
});
