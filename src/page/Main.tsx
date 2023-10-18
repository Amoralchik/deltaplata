import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import { Button, Image, Input, Stack, Text, Flex, Grid, Group } from '@mantine/core';
import image9 from '../img/image9.png';
import ContentHeader from '../components/ContentHeader';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useState, KeyboardEvent } from 'react';

export default function Main() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const onClick = () => {
    navigate('/search/' + searchQuery);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate('/search/' + searchQuery);
    }
  };

  return (
    <Stack>
      <ContentHeader title='Welcome' />
      <Flex justify='space-between' align='center' direction='row' wrap='nowrap'>
        <LeftBar />
        <Stack align='center' justify='center' miw={550} gap='md'>
          <Image src={image9} mah={300} w='auto' />
          <Stack align='center' gap='xs'>
            <Text size='lg' fw={700}>
              Hi there ! I'm your search assistant
            </Text>
            <Text size='xl'>Please enter the keyword you want to search for</Text>
          </Stack>
          <Grid miw={'100%'}>
            <Grid.Col span={10}>
              <Input onKeyDown={onKeyDown} value={searchQuery} placeholder='Keyword' size='xs' onChange={onChange} />
            </Grid.Col>
            <Grid.Col span={2}>
              <Button onClick={onClick} size='xs' color='black'>
                Search
              </Button>
            </Grid.Col>
          </Grid>
        </Stack>
        <RightBar />
      </Flex>
    </Stack>
  );
}
