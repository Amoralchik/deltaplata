import { Card, Group, Stack } from '@mantine/core';
import SearchTag from './SearchTag';

export default function RightBar() {
  return (
    <Stack>
      <Card>
        <p>Card content</p>
      </Card>
      <Card>
        <Group>
          <SearchTag title='wwqrqwwqrqwrwqww' />
          <SearchTag title='www' />
          <SearchTag title='www' />
          <SearchTag title='www' />
        </Group>
      </Card>
      <Card>
        <Group>
          <SearchTag title='www' />
          <SearchTag title='www' />
          <SearchTag title='www' />
          <SearchTag title='www' />
        </Group>
      </Card>
    </Stack>
  );
}
