import React from "react";
import { NavLink } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-links">
            <NavLink to="/contacts" className="footer-link">
              Контакты
            </NavLink>
          </div>
          <div className="footer-info">
            <span>Hata@Dubai.com</span>
            <span>+7 (777) 777-77-77</span>
            <span>
              Адрес: ОАЭ, г. Дубай, Бурдж-Халифа, оф. 1
            </span>
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
