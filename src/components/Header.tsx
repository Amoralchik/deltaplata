import { Button, Container, Grid, Group, Input } from '@mantine/core';

export default function Header() {
  return (
    <Container style={{ backgroundColor: '#141413', height: '2%', minWidth: '100%' }}>
      <Grid align='center' justify='space-around'>
        <Grid.Col span={6}>
          <Input size='middle' placeholder='Please type your keyword' />
        </Grid.Col>
        <Grid.Col span={3}>
          <Group>
            <p style={{ color: '#FFFFFF', whiteSpace: 'nowrap', fontSize: '16px' }}>Looking for more details?</p>
            <Button>Advanced Search</Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
