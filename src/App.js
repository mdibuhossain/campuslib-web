import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigationbar';
import CSE from './pages/CSE/CSE';
import EEE from './pages/EEE/EEE';
import Home from './pages/Home/Home';
import MAT from './pages/MAT/MAT';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/cse' element={<CSE />} />
          <Route path='/eee' element={<EEE />} />
          <Route path='/math' element={<MAT />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
