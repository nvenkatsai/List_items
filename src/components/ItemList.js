import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const ItemList = () => {
  const { items, searchTerm } = useSelector((state) => state.items);

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
};

export default React.memo(ItemList);
