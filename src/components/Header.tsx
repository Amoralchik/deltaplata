import { ActionIcon, Button, Container, Grid, Group, Input, Text } from '@mantine/core';
import { SearchIcon } from '../icons';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
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
    <Container style={{ backgroundColor: '#141413', padding: '16px', minWidth: '100%' }}>
      <Grid align='center' justify='space-around'>
        <Grid.Col span={6}>
          <Group>
            <ActionIcon onClick={onClick} radius='xl' color='#141413' style={{ border: '1px solid #B8C0C8' }}>
              <SearchIcon color='#FFFFFF' />
            </ActionIcon>
            <Input
              onKeyDown={onKeyDown}
              onChange={onChange}
              variant='unstyled'
              styles={{ input: { color: '#FFFFFF' } }}
              size='md'
              placeholder='Please type your keyword'
            />
          </Group>
        </Grid.Col>
        <Grid.Col span={3}>
          <Group wrap='nowrap'>
            <Text style={{ color: '#FFFFFF', whiteSpace: 'nowrap', fontSize: '16px' }}>Looking for more details?</Text>
            <Button color='#FFFFFF' radius='lg'>
              <Text c='black'>Advanced Search</Text>
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
