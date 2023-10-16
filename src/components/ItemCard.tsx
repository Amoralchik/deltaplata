import { Button, Card, Space, Tag, Typography } from 'antd';

export default function ItemCard() {
  return (
    <Card>
      <Space>
        <Tag> 30 May, 2023 </Tag>
        <Button type='primary' shape='circle' />
        <Button type='primary' shape='circle' />
      </Space>
      <Space direction='vertical'>
        <Typography.Text>Person</Typography.Text>
        <Typography.Title>NAME Person</Typography.Title>
        <Space>
          <Tag> 30 May, 2023 </Tag>
          <Tag> 30 May, 2023 </Tag>
          <Tag> 30 May, 2023 </Tag>
        </Space>
        <Space direction='vertical'>
          <Typography.Text>Country</Typography.Text>
          <Typography.Text>Setember 1978</Typography.Text>
          <Typography.Text> Flat 9, 112 Belgrave Road, London, SW1V 2BL</Typography.Text>
        </Space>
        <Button type='primary'> Details </Button>
      </Space>
    </Card>
  );
}
