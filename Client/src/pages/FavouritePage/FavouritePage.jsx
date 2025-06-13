// import React from 'react'
// import FavouriteForm from '../../features/FavouriteForm/FavouriteForm'

// export default function FavouritePage() {
//   return (
//     <>
//     <FavouriteForm/>
//     </>
//   )
// }


// import React, { useEffect, useState } from "react";
// import { FavoriteApi } from "../../entities/favourites/favouriteApi";
// import  CardApi  from "../../entities/card/cardApi";
// import FavouriteCard from "../../features/FavouriteForm/FavouriteCard";

// const FavouritePage = ({ user }) => {
//   const [favorites, setFavorites] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadFavorites = async () => {
//       try {
//         if (user?.id) {
//           // Получаем избранные карточки пользователя
//           const favs = await FavoriteApi.getUserFavorites(user.id);
          
//           // Для каждой избранной карточки получаем полные данные
//           const cardsData = await Promise.all(
//             favs.map(async (fav) => {
//               const card = await CardApi.getById(fav.cardId);
//               return {
//                 ...fav,
//                 card,
//                 isFavorite: true, // Так как это страница избранного, все карточки здесь избранные
//                 rating: calculateAverageRating(card.userRate || []),
//                 reviews: card.userReview || []
//               };
//             })
//           );
          
//           setFavorites(cardsData);
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadFavorites();
//   }, [user]);

//   // Функция для расчета среднего рейтинга
//   const calculateAverageRating = (ratings) => {
//     if (!ratings || ratings.length === 0) return 0;
//     const sum = ratings.reduce((total, rate) => total + rate.mark, 0);
//     return (sum / ratings.length).toFixed(1);
//   };

//   const handleToggleFavorite = async (cardId) => {
//     try {
//       await FavoriteApi.toggleFavorite(cardId);
//       setFavorites(favorites.filter(fav => fav.cardId !== cardId));
//     } catch (error) {
//       console.error('Failed to toggle favorite:', error);
//     }
//   };

//   if (loading) return <div>Загрузка избранного...</div>;
//   if (error) return <div>Ошибка: {error}</div>;

//   return (
//     <div className="favourites-page">
//       <h1>Избранное</h1>
      
//       {favorites.length === 0 ? (
//         <p>У вас пока нет избранных объявлений</p>
//       ) : (
//         <div className="favourites-list">
//           {favorites.map((favorite) => (
//             <FavouriteCard 
//               key={favorite.id}
//               card={favorite.card}
//               isFavorite={favorite.isFavorite}
//               rating={favorite.rating}
//               reviews={favorite.reviews}
//               onToggleFavorite={() => handleToggleFavorite(favorite.cardId)}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FavouritePage;

import React, { useEffect, useState } from "react";
import FavoriteApi  from "../../entities/favourites/favouriteApi";
import CardApi from "../../entities/card/cardApi";
import FavouriteCard from "../../features/FavouriteForm/FavouriteCard";

const FavouritePage = ({ user }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        if (user?.id) {
          const favs = await FavoriteApi.getUserFavorites(user.id);
          console.log('Favorites from API:', favs); // Логируем данные
          
          const cardsData = await Promise.all(
            favs.map(async (fav) => {
              try {
                const card = await CardApi.getById(fav.cardId);
                console.log('Card data:', card); // Логируем данные карточки
                return {
                  ...fav,
                  card: card || {}, // Защита от undefined
                  isFavorite: true,
                  rating: calculateAverageRating(card?.userRate || []),
                  reviews: card?.userReview || []
                };
              } catch (cardError) {
                console.error('Error loading card:', cardError);
                return null;
              }
            })
          );
          
          setFavorites(cardsData.filter(Boolean)); // Фильтруем null/undefined

          console.log(favorites)
        }
      } catch (err) {
        console.error('Error loading favorites:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, [user]);

  const calculateAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0;
    const sum = ratings.reduce((total, rate) => total + (rate?.mark || 0), 0);
    return (sum / ratings.length).toFixed(1);
  };

  const handleToggleFavorite = async (cardId) => {
    try {
      await FavoriteApi.toggleFavorite(cardId);
      setFavorites(favorites.filter(fav => fav.cardId !== cardId));
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
    }
  };

  if (loading) return <div className="loading">Загрузка избранного...</div>;
  if (error) return <div className="error">Ошибка: {error}</div>;

  return (
    <div className="favourites-page">
      <h1>Избранное</h1>
      
      {favorites.length === 0 ? (
        <p>У вас пока нет избранных объявлений</p>
      ) : (
        <div className="favourites-list">
          {favorites.map((favorite, index) => (
            <FavouriteCard 
              key={`${favorite.id}-${index}`} // Уникальный ключ
              card={favorite.card}
              isFavorite={favorite.isFavorite}
              rating={favorite.rating}
              reviews={favorite.reviews}
              onToggleFavorite={() => handleToggleFavorite(favorite.cardId)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritePage;