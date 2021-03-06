import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css';
import Navigation from './components/Navigationbar';
import CSE from './pages/CSE/CSE';
import EEE from './pages/EEE/EEE';
import Home from './pages/Home/Home';
import MAT from './pages/MAT/MAT';
import Search from './pages/Search/Search';
import Request from './pages/Request/Request';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { AuthProvider } from './context/AuthProvider';
import RequireAuth from './PrivateRoute/RequireAuth';
import PendingRequest from './pages/PendingRequest/PendingRequest';
import MyContents from './pages/MyContents/MyContents';
import ManageContent from './pages/ManageContent/ManageContent';
import AdminRoute from './PrivateRoute/AdminRoute';
import MakeAdmin from './pages/MakeAdmin/MakeAdmin';
import EditContent from './pages/EditContent/EditContent';
import FooterBar from './components/FooterBar';
import Ads from './components/Ads';
import ChangeDP from './pages/ChangeDP/ChangeDP';
import STA from './pages/STA/STA';

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
        <AuthProvider>
          {/* <Ads /> */}
          <Navigation />
          <Routes>
            <Route exact path='' element={<Home />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/search' element={<Search />} />
            <Route exact path='/request' element={<Request />} />
            <Route exact path='/changedp' element={
              <RequireAuth>
                <ChangeDP />
              </RequireAuth>
            } />
            <Route exact path='/pending' element={
              <RequireAuth>
                <PendingRequest />
              </RequireAuth>
            } />
            <Route exact path='/mycontent' element={
              <RequireAuth>
                <MyContents />
              </RequireAuth>
            } />
            <Route exact path='/manage' element={
              <AdminRoute>
                <ManageContent />
              </AdminRoute>
            } />
            <Route exact path='/edit/:id' element={
              <RequireAuth>
                <EditContent />
              </RequireAuth>
            } />
            <Route exact path='/makeadmin' element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            } />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Register />} />
            <Route exact path='/cse' element={<CSE />} />
            <Route exact path='/eee' element={<EEE />} />
            <Route exact path='/math' element={<MAT />} />
            <Route exact path='/sta' element={<STA />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
