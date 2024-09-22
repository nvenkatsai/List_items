import React from 'react';

const Item = React.memo(({ item }) => {
  return <li>{item}</li>;
});

export default Item;
