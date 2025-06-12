import React from "react";
import { useNavigate } from "react-router";
import UserApi from "../../entities/user/UserApi";
import RegForm from "../../features/RegForm/RegForm";

export default function RegFormPage({ setUser }) {
  const navigate = useNavigate();

  const handleRegSubmit = async (name, email, password) => {
    try {
      const response = await UserApi.registration({ name, email, password });
      if (response.data.accessToken && response.statusCode === 200) {
        setUser(response.data.user);
        navigate("/");
      }
    } catch (error) {
      console.log("не могу зарегистрироваться", error);
    }
  };

  return (
    <div className="auth-page">
      <RegForm onSubmit={handleRegSubmit} />
    </div>
  );
}
