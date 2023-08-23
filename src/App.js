import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import "./App.css";
import { AuthProvider } from "./context/AuthProvider";
import CircularLoading from "./components/Circular_Loading/CircularLoading";
import NotFound from "./components/NotFound/NotFound";
import { UtilityProvider } from "./context/UtilityProvider";
import Test from "./pages/Test/Test";
const Department = lazy(() => import("./pages/Department"));
const Navigation = lazy(() => import("./components/Navigationbar"));
const Home = lazy(() => import("./pages/Home/Home"));
// const CSE = lazy(() => import("./pages/CSE/CSE"));
// const EEE = lazy(() => import("./pages/EEE/EEE"));
// const MAT = lazy(() => import("./pages/MAT/MAT"));
// const STA = lazy(() => import("./pages/STA/STA"));
// const Islamic = lazy(() => import("./pages/Islamic/Islamic"));
// const NonAcademic = lazy(() => import("./pages/NonAcademic/NonAcademic"));
const Search = lazy(() => import("./pages/Search/Search"));
const Request = lazy(() => import("./pages/Request/Request"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const RequireAuth = lazy(() => import("./PrivateRoute/RequireAuth"));
const AdminRoute = lazy(() => import("./PrivateRoute/AdminRoute"));
const MakeAdmin = lazy(() => import("./pages/MakeAdmin/MakeAdmin"));
const EditContent = lazy(() => import("./pages/EditContent/EditContent"));
const ChangeDP = lazy(() => import("./pages/ChangeDP/ChangeDP"));
const ContentManagement = lazy(() =>
  import("./pages/ContentManagement/ContentManagement")
);
// import Ads from './components/Ads';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getBooks: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        getQuestions: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        getAllSyllabus: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        getUsers: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

// backup server [if main server get failed] -------------
const primaryServerEndpoint = process.env.REACT_APP_BACKEND;
const backupServerEndpoint = process.env.REACT_APP_BACKEND_BACKUP;

const errorLink = (uri, options) => {
  return fetch(uri, options).catch(() => {
    return fetch(backupServerEndpoint, options);
  });
};
// <---------------------------------

const client = new ApolloClient({
  link: createUploadLink({
    uri: primaryServerEndpoint,
    fetch: errorLink,
  }),
  cache,
});

const theme = createTheme({
  typography: {
    fontFamily: [
      "'Encode Sans SC'",
      "sans-serif",
      "'Secular One'",
      "'Poppins'",
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Suspense fallback={<CircularLoading />}>
            <UtilityProvider>
              <AuthProvider>
                {/* <Ads /> */}
                <Navigation />
                <Routes>
                  <Route path="*" element={<NotFound />} />
                  <Route exact path="" element={<Home />} />
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/search" element={<Search />} />
                  <Route exact path="/request" element={<Request />} />
                  <Route exact path="/test" element={<Test />} />
                  <Route
                    exact
                    path="/settings"
                    element={
                      <RequireAuth>
                        <ChangeDP />
                      </RequireAuth>
                    }
                  />
                  <Route
                    exact
                    path="/pending"
                    element={
                      <RequireAuth>
                        <ContentManagement
                          isMyContent={false}
                          pageTitle="PENDING REQUEST"
                        />
                      </RequireAuth>
                    }
                  />
                  <Route
                    exact
                    path="/mycontent"
                    element={
                      <RequireAuth>
                        <ContentManagement
                          isMyContent={true}
                          pageTitle="MY CONTENT"
                        />
                      </RequireAuth>
                    }
                  />
                  <Route
                    exact
                    path="/manage"
                    element={
                      <AdminRoute>
                        <ContentManagement pageTitle="MANAGE CONTENT" />
                      </AdminRoute>
                    }
                  />
                  <Route
                    exact
                    path="/edit/:id"
                    element={
                      <RequireAuth>
                        <EditContent />
                      </RequireAuth>
                    }
                  />
                  <Route
                    exact
                    path="/makeadmin"
                    element={
                      <AdminRoute>
                        <MakeAdmin />
                      </AdminRoute>
                    }
                  />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/signup" element={<Register />} />
                  {/* <Route exact path="/cse" element={<CSE />} />
                <Route exact path="/eee" element={<EEE />} />
                <Route exact path="/math" element={<MAT />} />
                <Route exact path="/sta" element={<STA />} />
                <Route exact path="/islamic" element={<Islamic />} />
                <Route exact path="/nonacademic" element={<NonAcademic />} /> */}
                  <Route exact path="/department/:dept" element={<Department />} />
                </Routes>
              </AuthProvider>
            </UtilityProvider>
          </Suspense>
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
