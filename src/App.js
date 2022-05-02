import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css';
import Navigation from './components/Navigationbar';
import CSE from './pages/CSE/CSE';
import EEE from './pages/EEE/EEE';
import Home from './pages/Home/Home';
import MAT from './pages/MAT/MAT';
import Search from './pages/Search/Search';

const theme = createTheme({
  typography: {
    fontFamily: [
      "'Encode Sans SC'",
      "sans-serif",
      "'Secular One'",
      "'Poppins'"
    ].join(',')
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path='' element={<Home />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/cse' element={<CSE />} />
          <Route exact path='/eee' element={<EEE />} />
          <Route exact path='/math' element={<MAT />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
