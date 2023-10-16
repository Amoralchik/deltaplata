import { Button, Card, Checkbox, Select, Stack, Text, Title } from '@mantine/core';

export default function LeftBar() {
  return (
    <Card style={{ width: 300 }}>
      <Title>Special Filter</Title>
      <Stack style={{ maxHeight: '300px', minWidth: '100%', margin: '0px 4px', overflowY: 'scroll' }}>
        <Checkbox label='Checkbox' />
        <Checkbox label='Checkbox' />
        <Checkbox label='Checkbox' />
        <Checkbox label='Checkbox' />
        <Checkbox label='Checkbox' />
        <Checkbox label='Checkbox' />
      </Stack>
      <Button radius='xl'> Remove all filter </Button>
      <div>
        <Text> Country Filter </Text>
        <Select data={['React', 'Angular', 'Vue', 'Svelte']} />
      </div>
    </Card>
  );
}
