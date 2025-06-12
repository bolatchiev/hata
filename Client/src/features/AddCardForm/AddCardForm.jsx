import React, { useState } from "react";
import CardApi from "../../entities/card/cardApi";
import "./AddCardForm.css";

export default function AddCardForm({ userId, onClose }) {
  const [newCard, setNewCard] = useState({
    type: "",
    description: "",
    price: "",
    city: "",
    flors: "",
    userId: userId,
    photo: "",
  });

  const handleInputChange = (e) => {
    setNewCard({
      ...newCard,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CardApi.create(newCard);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Ошибка при создании карточки", error);
    }
  };

  //   const saveHandler = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const data = await CardApi.create(newCard);
  //       console.log("Updated data:", data);
  //     } catch (error) {
  //       console.log("Ошибка при создании карточки", error);
  //     }
  //   };

  return (
    <div className="add-card-form-overlay">
      <div className="add-card-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Тип:</label>
            <input
              name="type"
              value={newCard.type}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Описание:</label>
            <textarea
              name="description"
              value={newCard.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Цена:</label>
            <input
              name="price"
              value={newCard.price}
              onChange={handleInputChange}
              type="number"
              required
            />
          </div>

          <div className="form-group">
            <label>Город:</label>
            <input
              name="city"
              value={newCard.city}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Количество комнат:</label>
            <input
              name="flors"
              value={newCard.flors}
              onChange={handleInputChange}
              type="number"
              required
            />
          </div>

          <div className="form-group">
            <label>URL изображения:</label>
            <input
              name="photo"
              value={newCard.photo}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-actions">
            <button
              //   onClick={saveHandler}
              type="submit"
              className="btn save-btn"
            >
              Сохранить
            </button>
            <button type="button" className="btn cancel-btn" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
