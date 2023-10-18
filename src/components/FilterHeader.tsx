import { Button, Group, Select, Text, Title } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import React from 'react';
import { TrashIcon } from '../icons';
import dayjs from 'dayjs';

export default function FilterHeader({ title, titleChildren }: { title: string; titleChildren?: React.ReactNode }) {
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
          <Text size='xs'>Sort from</Text>
          <DateInput valueFormat='DD/MM/YYYY' value={dayjs().toDate()} />
        </Group>
        <Group>
          <Text size='xs'>to</Text>
          <DateInput valueFormat='DD/MM/YYYY' value={dayjs().subtract(1, 'week').toDate()} />
        </Group>
      </Group>
      <Button radius='xl' color='#777F86'>
        <Group gap='xs'>
          <TrashIcon color='white' />
          <Text>Clear all history</Text>
        </Group>
      </Button>
    </Group>
  );
}
