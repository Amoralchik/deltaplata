import { ActionIcon, Badge, Button, Card, Group, Stack, Text, Title } from '@mantine/core';
import { ArrowRightIcon, BookmarkIcon, CalendarIcon, MapPinIcon, Share2Icon } from '../icons';

export default function ItemCard({
  date,
  personName,
  country,
  itemDate,
  address,
  tags,
  horizontal,
}: {
  date: string;
  personName: string;
  country: string;
  itemDate: string;
  address: string;
  tags: string[];
  horizontal?: boolean;
}) {
  const Content = () => (
    <>
      <Group gap='xs' wrap='nowrap' justify='space-between'>
        <Badge size='sm' c='#141413' color='#FFFFFF'>
          {date}
        </Badge>
        <Group>
          <ActionIcon radius='xl' c='#141413' color='#FFFFFF'>
            <Share2Icon />
          </ActionIcon>
          <ActionIcon radius='xl' c='#141413' color='#FFFFFF'>
            <BookmarkIcon />
          </ActionIcon>
        </Group>
      </Group>
      <div>
        <Text size='xs'>Person</Text>
        <Title fw={700} size='xl'>
          {personName}
        </Title>
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
        <CalendarIcon />
        <Text c='#4B5359' size='xs'>
          {itemDate}
        </Text>
      </Group>
      <Group gap='xs' wrap='nowrap'>
        <MapPinIcon />
        <Text c='#4B5359' size='xs'>
          {address}
        </Text>
      </Group>
      <Button size='xs' radius='lg' maw={100} c='#141413' bg='#FFFFFF'>
        <Group gap='xs' wrap='nowrap'>
          <Text fw={700} size='xs'>
            Details
          </Text>
          <ArrowRightIcon color='#141413' />
        </Group>
      </Button>
    </>
  );

  const ContentHorizontal = () => (
    <Stack>
      <Group wrap='nowrap' justify='space-between'>
        <Badge c='#141413' color='#FFFFFF'>
          {date}
        </Badge>
        <Group>
          <ActionIcon radius='xl' c='#141413' color='#FFFFFF'>
            <Share2Icon />
          </ActionIcon>
          <ActionIcon radius='xl' c='#141413' color='#FFFFFF'>
            <BookmarkIcon />
          </ActionIcon>
        </Group>
      </Group>
      <Group>
        <Stack>
          <Stack gap='xs'>
            <Text size='xs'>Person</Text>
            <Title fw={700} size='xl'>
              {personName}
            </Title>
          </Stack>
          <Group gap='xs'>
            {tags.map((tag) => (
              <Badge color='transparent' c='#141413' style={{ border: '1px solid #141413' }} size='xs'>
                {tag}
              </Badge>
            ))}
          </Group>
        </Stack>
        <Stack>
          <Text c='#4B5359' size='xs'>
            {country}
          </Text>
          <Group gap='xs'>
            <CalendarIcon />
            <Text c='#4B5359' size='xs'>
              {itemDate}
            </Text>
          </Group>
          <Group gap='xs' wrap='nowrap'>
            <MapPinIcon />
            <Text c='#4B5359' size='xs'>
              {address}
            </Text>
          </Group>
        </Stack>
        <Button size='xs' radius='lg' maw={100} c='#141413' bg='#FFFFFF'>
          <Group gap='xs' wrap='nowrap'>
            <Text fw={700} size='xs'>
              Details
            </Text>
            <ArrowRightIcon color='#141413' />
          </Group>
        </Button>
      </Group>
    </Stack>
  );

  return (
    <Card shadow='sm' bg='#F1F7FD' style={{ border: '1px #B8C0C8 solid', padding: '16px', borderRadius: '8px' }}>
      <Stack gap='xs'>{horizontal ? <ContentHorizontal /> : <Content />}</Stack>
    </Card>
  );
}
