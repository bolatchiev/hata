import React, { useState } from 'react';
import styles from './CardPage.module.css'; // Импорт стилей
import { useNavigate } from 'react-router';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export default function CardPage({ card }) {  
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleFavorite = () => setIsFavorite(!isFavorite);
  const showDetails = () => navigate(`/cards/${card.id}`);

  return (
    <div className={styles.card}>
      <img 
        src={card.photo || '/default-house.jpg'} 
        alt={card.type} 
        className={styles.cardImage}
      />
      
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{card.type}</h3>
        <p className={styles.cardDescription}>{card.description}</p>
        
        <div className={styles.cardMeta}>
          <span className={styles.cardMetaItem}>
            <strong>Город:</strong> {card.city}
          </span>
          <span className={styles.cardMetaItem}>
            <strong>Цена:</strong> {card.price.toLocaleString()} ₽
          </span>
          <span className={styles.cardMetaItem}>
            <strong>Комнат:</strong> {card.flors}
          </span>
        </div>
        
        <div className={styles.cardActions}>
          <button 
            className={styles.detailsButton}
            onClick={showDetails}
          >
            Подробнее
          </button>
          <button
            className={`${styles.favoriteButton} ${isFavorite ? styles.active : ''}`}
            onClick={handleFavorite}
            aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  );
}

