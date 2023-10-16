import { Row, Col, Typography, Space, Dropdown, Button, Flex, Input } from 'antd';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import image9 from '../img/image9.png';

export default function Main() {
  return (
    <>
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
          <Flex align='center' justify='center' vertical>
            <img src={image9} className='App-logo' alt='logo' />
            <Typography.Text>Hi there ! I'm your search assistant</Typography.Text>
            <Typography.Text>Please enter the keyword you want to search for</Typography.Text>
            <Space>
              <Input placeholder='Keyword' /> <Button>Search</Button>
            </Space>
          </Flex>
        </Col>
        <Col>
          <RightBar />
        </Col>
      </Row>
    </>
  );
}
