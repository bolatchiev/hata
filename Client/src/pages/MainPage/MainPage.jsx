import FilterCard from '../../widgets/FilterCard';

import React, { useEffect, useState } from 'react';
import TaskApi from '../../entities/card/cardApi';
import CardPage from '../CardPage/CardPage';
import styles from './MainPage.module.css'


export default function MainPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getAllCards() {
      try {
        const allCards = await TaskApi.getAll();
        setCards(allCards.data);
      } catch (error) {
        console.error("нет карточек", error);
      }
    }
    getAllCards();
  }, []);
  console.log(cards, '++++++++++++++++++');


  return (
    <div className={styles.cardGrid}>
      {cards.map((el) => (
        <CardPage key={el.id} el={el} />
      ))}
    </div>
  );
}
