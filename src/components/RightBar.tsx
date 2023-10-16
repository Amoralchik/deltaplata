import { Card, Space, Tag } from 'antd';
import SearchTag from './SearchTag';

export default function RightBar() {
  return (
    <Space direction='vertical'>
      <Card style={{ width: 300 }}>
        <p>Card content</p>
      </Card>
      <Card style={{ width: 300 }}>
        <SearchTag title='www' />
        <SearchTag title='www' />
        <SearchTag title='www' />
        <SearchTag title='www' />
      </Card>
      <Card style={{ width: 300 }}>
        <SearchTag title='www' />
        <SearchTag title='www' />
        <SearchTag title='www' />
        <SearchTag title='www' />
      </Card>
    </Space>
  );
}
