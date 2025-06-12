import React, { useState } from "react";
import CardList from "../../widgets/CardList/CardList";
import AddCardForm from "../../features/AddCardForm/AddCardForm";
// import UserCard from "../../widgets/UserCard/UserCard";

export default function ProfilePage({ user }) {
  const [showAddForm, setShowAddForm] = useState(false); // ! это
  return (
    <div className="profile-page">
      <h1>Мой профиль</h1>
      <button className="btn add-btn" onClick={() => setShowAddForm(true)}>
        Добавить карточку
      </button>

      {showAddForm && (
        <AddCardForm userId={user.id} onClose={() => setShowAddForm(false)} />
      )}

      <div className="cards-container">
        <CardList user={user} />
      </div>
    </div>

    // <div className="profile-page">
    //   <h1>Мой профиль</h1>
    //   <div className="cards-container">
    //     <CardList user={user} />
    //   </div>
    // </div>
  );
}
