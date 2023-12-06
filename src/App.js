import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import { useDispatch } from "react-redux";
import { getCurrentThunk } from "./redux/User/UserThunk";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<WelcomePage />} /> {/* Public route */}
        <Route path="/" element={<HomePage />} /> {/* Private route */}
        <Route
          path="/signin"
          element={
            <AuthLayout>
              <SignInPage />
            </AuthLayout>
          }
        />
        {/* Public route */}
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <SignUpPage />
            </AuthLayout>
          }
        />
        {/* Public route */}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
