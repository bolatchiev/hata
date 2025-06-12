import React from "react";
import { NavLink, useNavigate } from "react-router";
import UserApi from "../../entities/user/UserApi";
// import { setAccessToken } from "../../shared/lib/axiosInstance";
import "./Header.css";

export default function Header({ user, setUser }) {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await UserApi.logout();
      setUser({});
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <img src="images/logo.png" alt="Logo" className="logo" />
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
          {user.name ? (
            <>

            <NavLink
            to="/favourite"
            className={({ isActive }) =>
              `nav__link ${isActive ? "nav__link_active" : ""}`
            }
          >
            Избранное
          </NavLink>

              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `auth-link ${isActive ? "auth-link_active" : ""}`
                }
              >
                Мои обьявления
              </NavLink>

              <span>{user.email}</span>
              <button onClick={logoutHandler}>Выход</button>
            </>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                className={({ isActive }) =>
                  `auth-link ${isActive ? "auth-link_active" : ""}`
                }
              >
                Войти
              </NavLink>
              <NavLink
                to="/auth/register"
                className={({ isActive }) =>
                  `auth-link ${isActive ? "auth-link_active" : ""}`
                }
              >
                Регистрация
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
