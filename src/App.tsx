import Main from './page/Main';
import { Route, Routes } from 'react-router-dom';
import Search from './page/Search';
import Header from './components/Header';

function App() {
  return (
    <div className='App' style={{ fontFamily: 'Poppins' }}>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path='/search/*' element={<Search />} />
        <Route path='/history' element={<Search />} />
        <Route path='/saved-results' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
