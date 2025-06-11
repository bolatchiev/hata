import React from "react";
import { useNavigate } from "react-router";
import UserApi from "../../entities/user/UserApi";

export default function RegFormPage({ setUser }) {
  const navigate = useNavigate();

  const handleSubmit = async (name, email, password) => {
    try {
      const response = await UserApi.registration({ name, email, password });
      if (response.accessToken) {
        setUser(response.user);
        navigate("/");
      }
    } catch (error) {
      console.log("не могу зайти", error);
    }
  };

  return (
    <div className="auth-page">
      <RegForm onSubmit={handleSubmit} />
    </div>
  );
}
