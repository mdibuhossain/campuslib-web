import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigationbar';
import CSE from './pages/CSE/CSE';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/cse' element={<CSE />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
