import React from "react";
import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import "./layout.css";

export default function Layout({ children, user, setUser }) {
  return (
    <div className="layout">
      <Header user={user} setUser={setUser} />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
