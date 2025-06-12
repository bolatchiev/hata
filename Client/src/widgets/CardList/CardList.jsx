import React, { useEffect, useState } from "react";
import CardApi from "../../entities/card/cardApi";
import UserCard from "../UserCard/UserCard";

export default function CardList({ user }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const card = async () => {
      try {
        const response = await CardApi.getAll();
        // console.log("111111111111111", response);
        if (response.data) {
          setCards(response.data);
        }
      } catch (error) {
        console.error("ннет карточек", error);
      }
    };

    card();
  }, []);

  const filteredCards = user.isAdmin
    ? cards
    : cards.filter((card) => card.userId === user.id);

  async function deleteHandler(id) {
    try {
      await CardApi.delete(id);
      setCards(cards.filter((card) => card.id !== id));
    } catch (error) {
      console.log("------", error);
    }
  }

  const updateCard = (updatedCard) => {
    setCards(
      cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
  };

  return (
    <div className="card-list">
      {filteredCards.map((card) => (
        <UserCard
          key={card.id}
          card={card}
          user={user}
          deleteHandler={deleteHandler}
          updateCard={updateCard}
        />
      ))}
    </div>
  );
}
