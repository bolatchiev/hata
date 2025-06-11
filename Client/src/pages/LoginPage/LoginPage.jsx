import React, { useState } from "react";
import LoginForm from "../../features/LoginForm/LoginForm";
import UserApi from "../../entities/user/UserApi";
import { useNavigate } from "react-router";

export default function LoginPage({ setUser }) {
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    try {
      const response = await UserApi.login({ email, password });
      if (response.accessToken) {
        setUser(response.user);
        navigate("/");
      }
    } catch (error) {
      console.log("не могу войти", error);
    }
  };

  return (
    <>
      <div className="auth-page"></div>
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
}
