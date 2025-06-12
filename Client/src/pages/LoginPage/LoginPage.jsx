import React, { useState } from "react";
import LoginForm from "../../features/LoginForm/LoginForm";
import UserApi from "../../entities/user/UserApi";
import { useNavigate } from "react-router";

export default function LoginPage({ setUser }) {
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    console.log("Зашли");
    try {
      const response = await UserApi.login({ email, password });
      console.log("00000000", response);
      if (response.data.accessToken && response.statusCode === 200) {
        setUser(response.data.user);
        console.log("_______________", response.data.user);
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
