import { Group, Stack } from '@mantine/core';
import SearchTag from './SearchTag';
import BasicCard from './BasicCard';
import { UploadIcon } from '../icons/index';

export default function RightBar() {
  return (
    <Stack maw={285}>
      <BasicCard
        title='Bulk Upload'
        children={
          <div
            style={{
              padding: '16px',
              background: '#F4F4F4',
              borderRadius: '8px',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '8px',
              display: 'inline-flex',
            }}>
            <UploadIcon />
            <div style={{ color: '#777F86' }}>Max 20MB</div>
          </div>
        }></BasicCard>
      <BasicCard title='Recent Searches'>
        <Group>
          <SearchTag title='wwqrqwwqrqwrwqww' />
          <SearchTag title='www' />
          <SearchTag title='wwqrqwwqrqwrwqww' />
          <SearchTag title='wwqrqwwqrqwrwqww' />
          <SearchTag title='www' />
          <SearchTag title='www' />
        </Group>
      </BasicCard>
      <BasicCard title='Lasted Data Viewed'>
        <Group>
          <SearchTag title='www' />
          <SearchTag title='www' />
          <SearchTag title='www' />
          <SearchTag title='www' />
          <SearchTag title='www' />
          <SearchTag title='www' />
          <SearchTag title='www' />
          <SearchTag title='www' />
        </Group>
      </BasicCard>
    </Stack>
  );
}
