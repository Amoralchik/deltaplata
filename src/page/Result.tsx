import { Stack } from '@mantine/core';
import FilterHeader from '../components/FilterHeader';
import { useState } from 'react';
import { item } from './Search';
import ItemsList from '../components/ItemsList';
import { mockedItems } from '../mock';

export default function Result() {
  const [items, setItems] = useState<item[]>(mockedItems);
  return (
    <Stack>
      <FilterHeader title='Saved results' />
      <ItemsList items={items} cols={4} />
    </Stack>
  );
}

//  <ItemsList items={items} horizontal />
