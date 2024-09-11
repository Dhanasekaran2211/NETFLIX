import React from 'react'
import {
  ProtectedRoute,
  ProtectedRouteForUnAuthorizedPage,
} from "../routes/Productrouter";
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import Landingpage from "../pages/public/Landingpage"
import SignIn from "../pages/Auth/login/SignIn"
import Signup from '../pages/Auth/signup/Signup'
import Home from '../pages/portal/home/Home'
import Mylist from "../pages/portal/mylist/Mylist"
import Search from '../pages/portal/search/Search'
const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouteForUnAuthorizedPage>
              <Landingpage />
            </ProtectedRouteForUnAuthorizedPage>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRouteForUnAuthorizedPage>
              <SignIn/>
            </ProtectedRouteForUnAuthorizedPage>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRouteForUnAuthorizedPage>
              <Signup/>
            </ProtectedRouteForUnAuthorizedPage>
          }
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mylist"
          element={
            <ProtectedRoute>
              <Mylist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter