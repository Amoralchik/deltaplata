import { Layout, Input, Button, Space, Row, Col, Typography } from 'antd';
import Main from './page/Main';
import { Route, Routes } from 'react-router-dom';
import Search from './page/Search';

const { Header, Content } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout style={{ fontFamily: 'Poppins' }}>
        <Header style={{ backgroundColor: '#141413', height: '2%' }}>
          <Row justify='space-between' wrap={false}>
            <Col span={14}>
              <Input size='middle' placeholder='Please type your keyword' />
            </Col>
            <Col span={4}>
              <Space>
                <Typography.Text style={{ color: '#FFFFFF', whiteSpace: 'nowrap', fontSize: '16px' }}>
                  Looking for more details?
                </Typography.Text>
                <Button>Advanced Search</Button>
              </Space>
            </Col>
          </Row>
        </Header>
        <Content style={{ minHeight: '95vh' }}>
          <Routes>
            <Route index element={<Main />} />
            <Route path='/search/*' element={<Search />} />
            <Route path='/history' element={<Search />} />
            <Route path='/saved-results' element={<Search />} />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
