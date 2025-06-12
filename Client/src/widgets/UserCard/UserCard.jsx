import React, { useState } from "react";
import CardApi from "../../entities/card/cardApi";
import "./UserCard.css";

export default function UserCard({ card, user, deleteHandler, updateCard }) {
  const [edit, setEdit] = useState(false);
  const [editedCard, setEditedCard] = useState(card);

  const handleInputChange = (e) => {
    setEditedCard({
      ...editedCard,
      [e.target.name]: e.target.value,
    });
  };
  console.log(JSON.stringify(editedCard));
  const handleSave = async () => {
    try {
      const response = await CardApi.update(editedCard.id, editedCard);

      updateCard(response.data);
      setEdit(false);
    } catch (error) {
      console.error("Ошибка при обновлении карточки", error);
    }
  };

  const canDelete = user.isAdmin || card.userId === user.id;
  const canEdit = user.isAdmin || card.userId === user.id;

  return (
    <div className="user-card">
      <img
        src={card.photo || "images/logo.png"}
        alt={card.type}
        className="card-photo"
      />
      <div className="card-content">
        {edit ? (
          <div className="edit-fields">
            <input
              name="type"
              value={editedCard.type}
              onChange={handleInputChange}
              className="card-input"
            />
            <textarea
              name="description"
              value={editedCard.description}
              onChange={handleInputChange}
              className="card-input"
            />
            <input
              name="price"
              value={editedCard.price}
              onChange={handleInputChange}
              className="card-input"
              type="number"
            />
            <input
              name="city"
              value={editedCard.city}
              onChange={handleInputChange}
              className="card-input"
            />
            <input
              name="flors"
              value={editedCard.flors}
              onChange={handleInputChange}
              className="card-input"
              type="number"
            />
          </div>
        ) : (
          <div className="card-details">
            <h3 className="card-type">{card.type}</h3>
            <p className="card-description">{card.description}</p>
            <div className="card-properties">
              <div>
                <span className="card-price">Цена: {card.price} ₽</span>
              </div>
              <div>
                <span className="card-city">Город: {card.city}</span>
              </div>
              <div>
                <span className="card-floors">
                  Количество комнат: {card.flors}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="card-actions">
          {canDelete && (
            <button
              className="btn delete-btn"
              onClick={() => deleteHandler(card.id)}
            >
              Удалить
            </button>
          )}

          {card.userId === user.id &&
            (canEdit ? (
              <button className="btn save-btn" onClick={handleSave}>
                Сохранить
              </button>
            ) : (
              <button className="btn edit-btn" onClick={() => setEdit(true)}>
                Редактировать
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
