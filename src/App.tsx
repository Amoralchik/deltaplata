import Main from './page/Main';
import { Link, Route, Routes } from 'react-router-dom';
import Search from './page/Search';
import { Chip, Container, Group, Stack, Text } from '@mantine/core';
import Header from './components/Header';
import History from './page/History';
import Result from './page/Result';

function App() {
  return (
    <div className='App' style={{ fontFamily: 'Poppins' }}>
      <Header />
      <Container px={0} size={1440}>
        <Stack justify='center' mih='calc(100vh - 68px)'>
          <Routes>
            <Route index element={<Main />} />
            <Route path='/search/:text' element={<Search />} />
            <Route path='/history' element={<History />} />
            <Route path='/saved-results' element={<Result />} />
          </Routes>
          <Group>
            <Text> Useful links: </Text>
            <Link to='/'>
              <Chip>home page</Chip>
            </Link>
            <Link to='/search/search'>
              <Chip>search page</Chip>
            </Link>
            <Link to='/history'>
              <Chip>history page</Chip>
            </Link>
            <Link to='/saved-results'>
              <Chip>saved results page</Chip>
            </Link>
          </Group>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
