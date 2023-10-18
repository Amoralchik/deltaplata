import { Button, Flex, Image, SimpleGrid, Stack, Text } from '@mantine/core';
import { item } from '../page/Search';
import ItemCard from './ItemCard';
import image11 from './../img/image11.png';

export default function ItemsList({ items, horizontal, cols }: { items: item[]; horizontal?: boolean; cols?: number }) {
  return (
    <>
      {items.length ? (
        <SimpleGrid cols={cols || horizontal ? 1 : 3} pr={4} mah={700} style={{ overflowY: 'auto' }}>
          {items.map((item) => (
            <ItemCard
              key={item.key}
              date={item.date}
              personName={item.personName}
              country={item.country}
              itemDate={item.itemDate}
              address={item.address}
              tags={item.tags}
              horizontal={horizontal}
            />
          ))}
        </SimpleGrid>
      ) : (
        <Flex miw='100%' justify='center'>
          <Stack align='center' justify='center' miw={550} gap='md'>
            <Image src={image11} mah={300} w='auto' />
            <Stack align='center' gap='xs'>
              <Text size='xl' fw={700}>
                Opp ! I don't see any matching data
              </Text>
              <Text size='lg' maw={600} ta='center'>
                Sorry, the keyword you searched for did not match the data. Don't worry, try another way.
              </Text>
            </Stack>
            <Button color='#141413' radius='lg'>
              <Text c='#FFFFFF'>Advanced Search</Text>
            </Button>
          </Stack>
        </Flex>
      )}
    </>
  );
}
