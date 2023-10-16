import LeftBar from '../components/LeftBar';
import ItemCard from '../components/ItemCard';
import { SimpleGrid } from '@mantine/core';

export default function Search() {
  return (
    <div>
      <SimpleGrid cols={3}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </SimpleGrid>
    </div>
  );
}
