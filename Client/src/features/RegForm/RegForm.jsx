import React, { useState } from "react";
import "./RegisterForm.css";

export default function RegForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, email, password);

  };

  return (
    <div className="register-page-container">
      <form onSubmit={handleRegSubmit} className="register-form">
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
            placeholder="example@mail.com"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
            placeholder="Введите пароль"
          />
        </div>

        <button type="submit" className="submit-button">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
