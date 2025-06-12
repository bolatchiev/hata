import React from 'react';

export default function CardPage({ el }) {
  return (
    <div className="user-card">
      <img
        src={el.image || 'images/logo.png'}
        alt={el.type}
        className="card-image"
      />
      <div className="card-content">
        <div className="card-details">
          <h3 className="card-type">{el.type}</h3>
          <p className="card-description">{el.description}</p>
          <div className="card-properties">
            <span className="card-price">Цена: {el.price} ₽</span>
            <span className="card-city">Город: {el.city}</span>
            <span className="card-floors">Этажи: {el.flors}</span>
          </div>
        </div>
        <div className="card-actions">
          {canDelete && (
            <button
              className="btn delete-btn"
              onClick={() => deleteHandler(el.id)}
            >
              Удалить
            </button>
          )}

          {card.userId === user.id &&
            (edit ? (
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
