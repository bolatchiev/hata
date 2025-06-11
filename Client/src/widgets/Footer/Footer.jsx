import React from "react";
import { NavLink } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-links">
            <NavLink to="/" className="footer-link">
              Контакты
            </NavLink>
          </div>
          <div className="footer-info">
            <span>support@example.com</span>
            <span>+7 (895) 265-88-99</span>
          </div>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()}. Крутая недвижимость. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
