import ItemCard from '../components/ItemCard';
import { Badge, Group, SimpleGrid, Stack } from '@mantine/core';
import RightBar from '../components/RightBar';
import ContentHeader from '../components/ContentHeader';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Search() {
  const { text } = useParams();
  const [items, setItems] = useState([
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 1,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 2,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 3,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 4,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 5,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 6,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 7,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 8,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 9,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 10,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 11,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 12,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 13,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 14,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 15,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 16,
    },
    {
      date: '30 May, 2023',
      personName: 'Nora Frey Draeger',
      country: 'British',
      itemDate: 'Setember 1978',
      address: 'Flat 9, 112 Belgrave Road, London, SW1V 2BL',
      tags: ['Bank', 'Political party', 'Person of interest', 'Financial crim'],
      key: 17,
    },
  ]);
  return (
    <Stack>
      <ContentHeader title={`Result for: “${text}”`} titleChildren={<Badge miw={50}>{items.length}</Badge>} />
      <Group align='flex-start'>
        <RightBar />
        <SimpleGrid cols={4} pr={4} mah={700} style={{ overflowY: 'auto' }}>
          {items.map((item) => (
            <ItemCard
              key={item.key}
              date={item.date}
              personName={item.personName}
              country={item.country}
              itemDate={item.itemDate}
              address={item.address}
              tags={item.tags}
            />
          ))}
        </SimpleGrid>
      </Group>
    </Stack>
  );
}
