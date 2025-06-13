import FilterCard from '../../widgets/FilterCard';

import React, { useEffect, useState } from 'react';
import TaskApi from '../../entities/card/cardApi';
import CardPage from '../CardPage/CardPage';
import styles from './MainPage.module.css';
import { useNavigate } from 'react-router';

export default function MainPage({ user }) {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllCards() {
      try {
        const allCards = await TaskApi.getAll();
        setCards(allCards.data);
        setFilteredCards(allCards.data);
        const uniqueCities = [
          ...new Set(allCards.data.map((card) => card.city)),
        ];
        setCities(uniqueCities);
      } catch (error) {
        console.error('нет карточек', error);
      } finally {
        setLoading(false);
      }
    }
    getAllCards();
  }, []);

  useEffect(() => {
    let result = cards;

    if (selectedCities.length > 0) {
      result = result.filter((card) => selectedCities.includes(card.city));
    }

    if (searchTerm) {
      result = result.filter((card) => {
        const searchValues = [
          card.city,
          card.price?.toString(),
          card.flors?.toString(),
        ]
          .join(' ')
          .toLowerCase();
        return searchValues.includes(searchTerm.toLowerCase());
      });
    }

    setFilteredCards(result);
  }, 
  [cards, selectedCities, searchTerm]);

  const toggleCity = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  if (loading) return <div className={styles.loadingMessage}>Загрузка данных...</div>;


  return (
    <>
      <div className={styles.container}>
      <div className={styles.filterPanel}>
        <h2 className={styles.filterTitle}>Фильтры</h2>
        
        <div className={styles.cityFilter}>
          {cities.map(city => (
            <label key={city} className={styles.cityLabel}>
              <input
                type="checkbox"
                className={styles.cityCheckbox}
                checked={selectedCities.includes(city)}
                onChange={() => toggleCity(city)}
              />
              {city}
            </label>
          ))}
        </div>
        
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Поиск по городу, цене или этажам..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredCards.length === 0 ? (
        <div className={styles.emptyMessage}>Ничего не найдено. Измените параметры поиска.</div>
      ) : (
        <div className={styles.cardGrid}>
          {filteredCards.map(card => (
            <CardPage key={card.id} user={user} card={card} />
          ))}
        </div>
      )}
    </div>
    </>
  );
}
