import { ActionIcon, Badge, Button, Card, Group, Image, Stack, Text, Title } from '@mantine/core';
import { ArrowLeftIcon, BookmarkIcon, CalendarIcon, MapPinIcon, Share2Icon } from '../icons';

export default function ItemCard({
  date,
  personName,
  country,
  itemDate,
  address,
  tags,
}: {
  date: string;
  personName: string;
  country: string;
  itemDate: string;
  address: string;
  tags: string[];
}) {
  return (
    <Card maw={250} style={{ border: '1px #B8C0C8 solid', padding: '16px', borderRadius: '8px' }}>
      <Stack gap='xs'>
        <Group gap='xs' wrap='nowrap' justify='space-between'>
          <Badge size='xs'> {date} </Badge>
          <Group>
            <ActionIcon radius='xl' color='##FFFFFF'>
              <Image src={Share2Icon} mah={100} w='auto' />
            </ActionIcon>
            <ActionIcon radius='xl' color='##FFFFFF'>
              <Image src={BookmarkIcon} mah={100} w='auto' />
            </ActionIcon>
          </Group>
        </Group>
        <div>
          <Text size='xs'>Person</Text>
          <Title size='xs'>{personName}</Title>
        </div>
        <Group gap='xs'>
          {tags.map((tag) => (
            <Badge color='transparent' c='#141413' style={{ border: '1px solid #141413' }} size='xs'>
              {tag}
            </Badge>
          ))}
        </Group>
        <Text c='#4B5359' size='xs'>
          {country}
        </Text>
        <Group gap='xs'>
          <Image src={CalendarIcon} mah={16} maw={16} />
          <Text c='#4B5359' size='xs'>
            {itemDate}
          </Text>
        </Group>
        <Group gap='xs' wrap='nowrap'>
          <Image src={MapPinIcon} mah={16} maw={16} />
          <Text c='#4B5359' size='xs'>
            {address}
          </Text>
        </Group>
        <Button size='xs' radius='lg' maw='60px' color='black'>
          Details <Image src={ArrowLeftIcon} mah={100} w='auto' />
        </Button>
      </Stack>
    </Card>
  );
}
