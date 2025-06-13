import React, { useState } from "react";
import styles from "./CardPage.module.css"; // Импорт стилей
import { data, useNavigate } from "react-router";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useEffect } from "react";
import FavoriteApi from "../../entities/favourites/favouriteApi";
import axiosInstance from "../../shared/lib/axiosInstance";

export default function CardPage({ card , user}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  // const handleFavorite = () => setIsFavorite(!isFavorite);
  useEffect(() => {
    const checkFav = async () => {
      try {
        const response = await FavoriteApi.getUserFavorites(user.id)
        const favorite = response.data
        console.log(response)
        setIsFavorite(response.some(el => el.cardId === card.id))
      } catch (error) {
        console.log(error)
      }
    }

    if(user.id) checkFav()
  },[card.id, user.id])


  const handleFavorite = async () => {
    if(!user.id) return 
    try {
      FavoriteApi.toggleFavorite(card.id)
      // if(isFavorite){
      //   await axiosInstance.delete(`/favourite/${card.id}`)
      // }
      // else {axiosInstance.post(`/favourite/${card.id}`)}
      setIsFavorite(!isFavorite)
    } catch (error) {
      console.log(error)
    }
  }


  const showDetails = () => navigate(`/contacts`);

  return (
    <div className={styles.card}>
      <img
        src={card.photo || "images/dom.jpg"}
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
          <button className={styles.detailsButton} onClick={showDetails}>
            Связаться
          </button>
          <button
            className={`${styles.favoriteButton} ${
              isFavorite ? styles.active : ""
            }`}
            onClick={handleFavorite}
            aria-label={
              isFavorite ? "Удалить из избранного" : "Добавить в избранное"
            }
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  );
}
