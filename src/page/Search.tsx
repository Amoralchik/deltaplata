import ItemCard from '../components/ItemCard';
import { Badge, Group, SimpleGrid, Stack, Image, Text, Grid, Button, Flex } from '@mantine/core';
import RightBar from '../components/RightBar';
import ContentHeader from '../components/ContentHeader';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import image11 from './../img/image11.png';

interface item {
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
  const [items, setItems] = useState<item[]>([]);
  return (
    <Stack>
      <ContentHeader title={`Result for: “${text}”`} titleChildren={<Badge miw={50}>{items.length}</Badge>} />
      <Group align='center' wrap='nowrap'>
        <RightBar />
        {items.length ? (
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
        ) : (
          <Flex miw='100%' justify='center'>
            <Stack align='center' justify='center' miw={550} gap='md'>
              <Image src={image11} mah={300} w='auto' />
              <Stack align='center' gap='xs'>
                <Text size='lg' fw={700}>
                  Hi there ! I'm your search assistant
                </Text>
                <Text size='xl'>Please enter the keyword you want to search for</Text>
              </Stack>
              <Button color='#141413' radius='lg'>
                <Text c='#FFFFFF'>Advanced Search</Text>
              </Button>
            </Stack>
          </Flex>
        )}
      </Group>
    </Stack>
  );
}
