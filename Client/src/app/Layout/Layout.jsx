import React from "react";
import Header from "../../widgets/Header/Header";

export default function Layout({ children, user, setUser }) {
  return (
    <div className="layout">
      <Header user={user} setUser={setUser} />
      <main className="main-content">{children}</main>
      <footer className="footer">{/* Ваш футер, если нужен */}</footer>
    </div>
  );
}
