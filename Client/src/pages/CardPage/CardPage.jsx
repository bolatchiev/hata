import React, { useState, useEffect } from "react";
import styles from "./CardPage.module.css";
import { useNavigate, useParams } from "react-router";
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import RateApi from "../../entities/rate/rateApi";

export default function CardPage({ card }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const navigate = useNavigate();
  const [avgRating, setAvgRating] = useState(0);
  const { id, cardId, mark } = useParams();

  useEffect(() => {
    RateApi.getAll(card.id).then((res) => {
      const arr = Array.isArray(res) ? res : res.data || [];
      const sum = arr.reduce((s, r) => s + r.mark, 0);
      const avg = arr.length ? sum / arr.length : 0;
      setAvgRating(avg);
    });

    const savedRating = localStorage.getItem(`rating_${card.id}`); // !!
    if (savedRating) {
      setUserRating(parseInt(savedRating));
    }
    const savedFavorite = localStorage.getItem(`favorite_${card.id}`);
    if (savedFavorite) {
      setIsFavorite(savedFavorite === "true");
    }
  }, [card.id]);

  const handleFavorite = () => setIsFavorite(!isFavorite);
  const showDetails = () => navigate(`/contacts`);

  const handleRate = async (newRating) => {
    console.log("Начало входим рейтинг", newRating);

    try {
      const rateResponse = await RateApi.createOrUpdate(card.id, {
        mark: newRating,
      });
      console.log("-------------", rateResponse);

      localStorage.setItem(`rating_${card.id}`, newRating.toString()); // !

      setUserRating(newRating);
      const ratesResponse = await RateApi.getAll(card.id);
      console.log("0000000000000000000000", ratesResponse);
      const rates = Array.isArray(ratesResponse) ? ratesResponse : [];

      if (rates.length > 0) {
        const average =
          rates.reduce((sum, rate) => sum + rate.mark, 0) / rates.length;
        setRating(Math.round(average * 10) / 10);
      }
    } catch (error) {
      console.error("Ошибка при сохранении оценки!!!!!!!!:", error);
    }
  };

  return (
    <div className={styles.card}>
      <img
        src={card.photo || "images/dom.jpg"}
        alt={card.type}
        className={styles.cardImage}
      />

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{card.type}</h3>
          {rating > 0 && (
            <div className={styles.rating}>
              <FaStar className={styles.starIcon} />
              <span>{rating}</span>
            </div>
          )}
        </div>

        <p className={styles.cardDescription}>{card.description}</p>

        <div className={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`${styles.ratingStar} ${
                star <= (hoverRating || userRating) ? styles.filled : ""
              }`}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => handleRate(star)}
            />
          ))}
          <span className={styles.ratingText}>
            {userRating > 0 ? "Ваша оценка" : "Оцените"}
          </span>
        </div>

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
