import FilterCard from '../../widgets/FilterCard';

import React, { useEffect, useState } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import RegFormPage from '../RegFormPage/RegFormPage';
import TaskApi from '../../entities/card/cardApi';
import CardPage from '../CardPage/CardPage';


export default function MainPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getAllCards() {
      const allCards = await TaskApi.getAll();
      setCards(allCards);
    }
    getAllCards();
  }, []);
console.log(cards, '------------------')
  return (
    <>
      {cards?.map((el) => (
            <CardPage key={el.id} entry={el} />
          ))}
      <FilterCard />

      <LoginPage />
      <RegFormPage />
    </>
  );
}
