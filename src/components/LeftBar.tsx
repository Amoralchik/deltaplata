import { Button, Card, Checkbox, Dropdown, Space, Typography } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

export default function LeftBar() {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Card style={{ width: 300 }}>
      <Typography.Title>Special Filter</Typography.Title>
      <Space
        direction='vertical'
        style={{ maxHeight: '300px', minWidth: '100%', margin: '0px 4px', overflowY: 'scroll' }}>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
      </Space>
      <Button> Remove all filter </Button>
      <div>
        <Typography.Text> Country Filter </Typography.Text>
        <Dropdown menu={{ items: [] }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Button>Hover me</Button>
          </a>
        </Dropdown>
      </div>
    </Card>
  );
}
