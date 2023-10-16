import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import { Button, Grid, Group, Image, Input, Select, Stack, Text, Title } from '@mantine/core';
import image9 from '../img/image9.png';

export default function Main() {
  return (
    <>
      <Group justify='space-between' align='baseline'>
        <div>
          <Title> Welcome! </Title>
        </div>
        <Group>
          <Group>
            <Text>Filter by</Text>
            <Select data={['React', 'Angular', 'Vue', 'Svelte']} />
          </Group>
          <Group>
            <Text>Sort by</Text>
            <Select data={['React', 'Angular', 'Vue', 'Svelte']} />
          </Group>
        </Group>
      </Group>
      <Grid justify='space-around' align='center'>
        <LeftBar />
        <Stack align='center' justify='center'>
          <Image src={image9} h={300} w='auto' />
          <Text size='lg' fw={700}>
            Hi there ! I'm your search assistant
          </Text>
          <Text size='xl'>Please enter the keyword you want to search for</Text>
          <Group>
            <Input placeholder='Keyword' /> <Button color='black'>Search</Button>
          </Group>
        </Stack>
        <RightBar />
      </Grid>
    </>
  );
}
