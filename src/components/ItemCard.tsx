import { Button, Card, Chip, Group, Stack, Text, Title } from '@mantine/core';

export default function ItemCard() {
  return (
    <Card>
      <Group>
        <Chip> 30 May, 2023 </Chip>
        <Button />
        <Button />
      </Group>
      <Stack>
        <Text>Person</Text>
        <Title>NAME Person</Title>
        <Group>
          <Chip> 30 May, 2023 </Chip>
          <Chip> 30 May, 2023 </Chip>
          <Chip> 30 May, 2023 </Chip>
        </Group>
        <Stack>
          <Text>Country</Text>
          <Text>Setember 1978</Text>
          <Text> Flat 9, 112 Belgrave Road, London, SW1V 2BL</Text>
        </Stack>
        <Button> Details </Button>
      </Stack>
    </Card>
  );
}
