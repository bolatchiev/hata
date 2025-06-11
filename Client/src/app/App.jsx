
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
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
        const response = await UserApi.login();
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

    login();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          <Route element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

