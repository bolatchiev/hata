import React from "react";
import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import "./layout.css";
import { Outlet } from "react-router";

export default function Layout({ user, setUser }) {
  return (
    <div className="layout">
      <div className="header">
        <Header user={user} setUser={setUser} />
      </div>
      <main className="main-content"></main>
      <Outlet />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
