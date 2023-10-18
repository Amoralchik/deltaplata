import { Badge, Chip, Group, Stack } from '@mantine/core';
import RightBar from '../components/RightBar';
import ContentHeader from '../components/ContentHeader';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ItemsList from '../components/ItemsList';
import { mockedItems } from '../mock';

export interface item {
  date: string;
  personName: string;
  country: string;
  itemDate: string;
  address: string;
  tags: string[];
  key: number;
}

export default function Search() {
  const { text } = useParams();
  const [items, setItems] = useState<item[]>(mockedItems);
  const [empty, setEmpty] = useState(false);
  const [horizontal, setHorizontal] = useState(false);

  const onEmpty = () => {
    setEmpty(!empty);
    setItems(!empty ? [] : mockedItems);
  };

  const onHorizontal = () => {
    setHorizontal(!horizontal);
  };

  return (
    <Stack>
      <ContentHeader title={`Result for: “${text}”`} titleChildren={<Badge miw={50}>{items.length}</Badge>} />
      <Group align='center' wrap='nowrap'>
        <RightBar />
        <ItemsList items={items} horizontal={horizontal} />
      </Group>
      <Group>
        <Chip onClick={onEmpty}>empty</Chip>
        <Chip onClick={onHorizontal}>horizontal</Chip>
      </Group>
    </Stack>
  );
}
