import { Card, Group, Stack, Title } from '@mantine/core';

export default function BasicCard({
  children,
  title,
  titleChildren,
}: {
  children: React.ReactNode;
  titleChildren?: React.ReactNode;
  title: string;
}) {
  return (
    <Card maw={285} style={{ border: '1px #B8C0C8 solid', padding: '16px', borderRadius: '8px' }}>
      <Stack>
        <Group>
          <Title order={4}>{title}</Title>
          {titleChildren}
        </Group>
        {children}
      </Stack>
    </Card>
  );
}
