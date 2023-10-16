import { Button, Col, Dropdown, Flex, Row, Space, Typography } from 'antd';
import LeftBar from '../components/LeftBar';
import ItemCard from '../components/ItemCard';

export default function Search() {
  return (
    <div>
      <Row justify='space-evenly' wrap={false}>
        <Col>
          <Typography.Title> Welcome! </Typography.Title>
        </Col>
        <Space>
          <div>
            <Typography.Text> Filter by </Typography.Text>
            <Dropdown menu={{ items: [] }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Button>Hover me</Button>
              </a>
            </Dropdown>
          </div>
          <div>
            <Typography.Text> Sort by </Typography.Text>
            <Dropdown menu={{ items: [] }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Button>Hover me</Button>
              </a>
            </Dropdown>
          </div>
        </Space>
      </Row>
      <Row justify='space-evenly'>
        <Col>
          <LeftBar />
        </Col>
        <Col>
          <Flex justify='center' gap={3} flex={3}>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </Flex>
        </Col>
      </Row>
    </div>
  );
}
