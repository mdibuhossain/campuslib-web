import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css';
import Navigation from './components/Navigationbar';
import CSE from './pages/CSE/CSE';
import EEE from './pages/EEE/EEE';
import Home from './pages/Home/Home';
import MAT from './pages/MAT/MAT';

const theme = createTheme({
  typography: {
    fontFamily: "'Encode Sans SC', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
