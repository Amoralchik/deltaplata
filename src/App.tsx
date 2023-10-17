import Main from './page/Main';
import { Route, Routes } from 'react-router-dom';
import Search from './page/Search';
import { Container, Stack } from '@mantine/core';
import Header from './components/Header';

function App() {
  return (
    <div className='App' style={{ fontFamily: 'Poppins' }}>
      <Header />
      <Container px={0} size={1440}>
        <Stack justify='center' mih='calc(100vh - 68px)'>
          <Routes>
            <Route index element={<Main />} />
            <Route path='/search/:text' element={<Search />} />
            <Route path='/history' element={<Search />} />
            <Route path='/saved-results' element={<Search />} />
          </Routes>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
