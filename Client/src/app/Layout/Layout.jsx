import React from "react";
import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import "./layout.css";
import { Outlet } from "react-router";

export default function Layout({ user, setUser }) {
  return (
    <div className="layout">
      <Header user={user} setUser={setUser} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
