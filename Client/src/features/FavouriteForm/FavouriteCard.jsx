import React from 'react';
import './FavouriteCard.css';

const FavouriteCard = ({ card = {}, isFavorite, rating = 0, reviews = [], onToggleFavorite }) => {
  const safeCard = {
    photo: card.photo || '/public/images/logo.png',
    type: card.type || 'Объект недвижимости.',
    city: card.city || 'Локация не указана',
    price: card.price ? `${card.price.toLocaleString()} ₽` : 'Цена не указана',
    flors: card.flors || 'Не указано',
    description: card.description || 'Описание отсутствует'
  };

  return (
    <div className="favourite-card">
      <div className="card-header">
        <h3>{safeCard.type}</h3>
        <button 
          onClick={onToggleFavorite}
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        >
          {isFavorite ? '💙' : '♡'}
        </button>
      </div>
      
      <img 
        className="photo"
        src={safeCard.photo} 
        alt={`${safeCard.type} в ${safeCard.city}`} 
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/public/images/def.png';
        }}
        loading="lazy"
      />
      
      <div className="card-info">
        <p><strong>Город:</strong> {safeCard.city}</p>
        <p><strong>Кол-во комнат:</strong> {safeCard.flors}</p>
        <p><strong>Цена:</strong> {safeCard.price}</p>
        {/* <p className="card-rating"><strong>Рейтинг:</strong> {rating}/5</p> */}
        {/* <p className="card-description">
          {safeCard.description.substring(0, 100)}
          {safeCard.description.length > 100 ? '...' : ''}
        </p> */}
      </div>
      
      {/* <div className="card-reviews">
        <h4>Комментарии ({reviews.length}):</h4>
        {reviews.length > 0 ? (
          <ul>
            {reviews.slice(0, 2).map((review, idx) => (
              <li key={`review-${idx}`}>
                <p><strong>{review.User?.name || 'Аноним'}:</strong> {review.review}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Пока нет комментариев</p>
        )}
      </div> */}
      
      <div className="card-actions">
        <button className="details-btn">Подробнее</button>
      </div>
    </div>
  );
};

export default FavouriteCard;