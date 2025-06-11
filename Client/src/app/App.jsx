import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout/Layout";
// import HomePage from "./pages/HomePage";
// import MapPage from "./pages/MapPage";
// import LoginPage from "./pages/Auth/LoginPage";
// import RegisterPage from "./pages/Auth/RegisterPage";
import UserApi from "../entities/user/userApi";
import { setAccessToken } from "../shared/lib/axiosInstance";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await UserApi.checkAuth();
        if (response.data) {
          setUser(response.data);
          setAccessToken(response.token);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          {/* <Route index element={<HomePage user={user} />} />
          <Route path="map" element={<MapPage />} />
          <Route path="auth">
            <Route path="login" element={<LoginPage setUser={setUser} />} />
            <Route
              path="register"
              element={<RegisterPage setUser={setUser} />}
            />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
