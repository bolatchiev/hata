import React, { useState } from "react";
import CardList from "../../widgets/CardList/CardList";
import AddCardForm from "../../features/AddCardForm/AddCardForm";
import "./ProfilePage.css";

export default function ProfilePage({ user }) {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1 className="profile-title">Мой профиль</h1>
        <div>
          <button className="btn add-btn" onClick={() => setShowAddForm(true)}>
            Добавить карточку
          </button>
        </div>
      </div>

      {showAddForm && (
        <AddCardForm userId={user.id} onClose={() => setShowAddForm(false)} />
      )}

      <div className="cards-scroll-container">
        <div className="cards-row">
          <CardList user={user} />
        </div>
      </div>
    </div>
  );
}
