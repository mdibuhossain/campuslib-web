import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css';
import { AuthProvider } from './context/AuthProvider';
import CircularLoading from './components/Circular_Loading/CircularLoading';
import NotFound from './components/NotFound/NotFound';
import NonAcademic from './pages/NonAcademic/NonAcademic';
const Navigation = lazy(() => import('./components/Navigationbar'))
const CSE = lazy(() => import('./pages/CSE/CSE'))
const EEE = lazy(() => import('./pages/EEE/EEE'))
const Home = lazy(() => import('./pages/Home/Home'))
const MAT = lazy(() => import('./pages/MAT/MAT'))
const Search = lazy(() => import('./pages/Search/Search'))
const Request = lazy(() => import('./pages/Request/Request'))
const Login = lazy(() => import('./pages/Login/Login'))
const Register = lazy(() => import('./pages/Register/Register'))
const RequireAuth = lazy(() => import('./PrivateRoute/RequireAuth'))
const AdminRoute = lazy(() => import('./PrivateRoute/AdminRoute'))
const MakeAdmin = lazy(() => import('./pages/MakeAdmin/MakeAdmin'))
const EditContent = lazy(() => import('./pages/EditContent/EditContent'))
const ChangeDP = lazy(() => import('./pages/ChangeDP/ChangeDP'))
const STA = lazy(() => import('./pages/STA/STA'))
const ContentManagement = lazy(() => import('./pages/ContentManagement/ContentManagement'))
// import Ads from './components/Ads';

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
        <Suspense fallback={<CircularLoading />}>
          <AuthProvider>
            {/* <Ads /> */}
            <Navigation />
            <Routes>
              <Route path='*' element={<NotFound />} />
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
                  <ContentManagement isMyContent={false} pageTitle="PENDING REQUEST" />
                </RequireAuth>
              } />
              <Route exact path='/mycontent' element={
                <RequireAuth>
                  <ContentManagement isMyContent={true} pageTitle="MY CONTENT" />
                </RequireAuth>
              } />
              <Route exact path='/manage' element={
                <AdminRoute>
                  <ContentManagement pageTitle="MANAGE CONTENT" />
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
              <Route exact path='/nonacademic' element={<NonAcademic />} />
            </Routes>
          </AuthProvider>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
