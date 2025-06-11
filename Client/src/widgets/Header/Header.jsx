import React from "react";
import { NavLink, useNavigate } from "react-router";
import UserApi from "../../entities/user/UserApi";
import { setAccessToken } from "../../shared/lib/axiosInstance";
import "./Header.css";

export default function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await UserApi.signOut();
      if (response.statusCode === 200) {
        setUser(null);
        setAccessToken("");
        navigate("/");
      } else {
        alert(response.error || "Ошибка при выходе");
      }
    } catch (error) {
      alert(error.message || "Ошибка при выходе");
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav__link ${isActive ? "nav__link_active" : ""}`
            }
          >
            Главная
          </NavLink>

          <NavLink
            to="/map"
            className={({ isActive }) =>
              `nav__link ${isActive ? "nav__link_active" : ""}`
            }
          >
            Карта
          </NavLink>
        </nav>

        <div className="auth-section">
          {user ? (
            <>
              <span className="user-email">{user.email}</span>
              <button className="logout-btn" onClick={handleSignOut}>
                Выход
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/auth/register"
                className={({ isActive }) =>
                  `auth-link ${isActive ? "auth-link_active" : ""}`
                }
              >
                Регистрация
              </NavLink>
              <NavLink
                to="/auth/login"
                className={({ isActive }) =>
                  `auth-link ${isActive ? "auth-link_active" : ""}`
                }
              >
                Войти
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
