import React, { useState } from 'react';
import styles from './CardPage.module.css'; // Импорт стилей

export default function CardPage({ el }) {  
  const [card, setCard] = useState(el)
  console.log(el, 'vvvvvvvvvvvvvv')
  return (
    <div className={styles.card}>
      <img
        src={card.photo || '/images/logo.png'}
        alt={card.type}
        className={styles.cardImage}
      />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{card.type}</h3>
        <p className={styles.cardDescription}>{card.description}</p>
        <div className={styles.cardDetails}>
          <span className={styles.cardPrice}>Цена: {card.price} ₽</span>
          <span className={styles.cardCity}>Город: {card.city}</span>
          <span className={styles.cardRooms}>Комнат: {card.flors}</span>
        </div>
      </div>
    </div>
  );
}
