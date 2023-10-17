import { Group, Select, Text, Title } from '@mantine/core';
import React from 'react';

export default function ContentHeader({ title, titleChildren }: { title: string; titleChildren?: React.ReactNode }) {
  return (
    <Group justify='space-between' align='baseline'>
      <Group gap='xs' align='baseline'>
        <Title maw={500} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </Title>
        {titleChildren}
      </Group>
      <Group>
        <Group>
          <Text size='xs'>Filter by</Text>
          <Select data={['React', 'Angular', 'Vue', 'Svelte']} />
        </Group>
        <Group>
          <Text size='xs'>Sort by</Text>
          <Select data={['React', 'Angular', 'Vue', 'Svelte']} />
        </Group>
      </Group>
    </Group>
  );
}
