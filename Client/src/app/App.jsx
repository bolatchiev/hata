import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router";
import Layout from "./Layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
// import MapPage from "./pages/MapPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegFormPage from "../pages/RegFormPage/RegFormPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import UserApi from "../entities/user/userApi";
import CardApi from "../entities/card/cardApi";
import { setAccessToken } from "../shared/lib/axiosInstance";
import OSMap from "../widgets/Map/OSMap";

export default function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const login = async () => {
      try {
        const response = await UserApi.refresh();
        // console.log("111111111111111", response);
        if (response.data.user) {
          // console.log("--------------------", response.data);
          setUser(response.data.user);
          setAccessToken(response.data.accessToken);
        }
      } catch (error) {
        console.error("не смогла войти", error);
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
          <Route path="/" element={<MainPage />} />
          <Route path="/map" element={<OSMap />} />
          <Route
            path="/auth/login"
            element={
              user.name ? <Navigate to="/" /> : <LoginPage setUser={setUser} />
            }
          />
          <Route
            path="/auth/register"
            element={
              user.name ? (
                <Navigate to="/" />
              ) : (
                <RegFormPage setUser={setUser} />
              )
            }
          />
          <Route
            path="/profile"
            element={
              user.name ? (
                <ProfilePage user={user} />
              ) : (
                <Navigate to="/auth/login" />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
