// import React from "react";
// import "./FavouriteCard.css"; // Создайте этот файл для стилей

// const FavouriteCard = ({ card, isFavorite, rating, reviews, onToggleFavorite }) => {
//   return (
//     <div className="favourite-card">
//       <div className="card-header">
//         <h3>{card.type} в {card.city}</h3>
//         <button 
//           onClick={onToggleFavorite}
//           className={`favorite-btn ${isFavorite ? 'active' : ''}`}
//         >
//           {isFavorite ? '❤️' : '♡'}
//         </button>
//       </div>
      
//       <img src={card.photo} alt={`${card.type} в ${card.city}`} />
      
//       <div className="card-info">
//         <p>Цена: {card.price} ₽</p>
//         <p>Этаж: {card.flors}</p>
//         <p className="card-rating">Рейтинг: {rating}/5</p>
//         <p className="card-description">{card.description.substring(0, 100)}...</p>
//       </div>
      
//       <div className="card-reviews">
//         <h4>Комментарии ({reviews.length}):</h4>
//         {reviews.length > 0 ? (
//           <ul>
//             {reviews.slice(0, 2).map((review, index) => (
//               <li key={index}>
//                 <p><strong>{review.User?.name || 'Аноним'}:</strong> {review.review}</p>
//               </li>
//             ))}
//             {reviews.length > 2 && <p>...и еще {reviews.length - 2} комментариев</p>}
//           </ul>
//         ) : (
//           <p>Пока нет комментариев</p>
//         )}
//       </div>
      
//       <div className="card-actions">
//         <button className="details-btn">Подробнее</button>
//       </div>
//     </div>
//   );
// };

// export default FavouriteCard;




// import React from 'react';
// import './FavouriteCard.css';

// const FavouriteCard = ({ card = {}, isFavorite, rating = 0, reviews = [], onToggleFavorite }) => {
//   // Защитные проверки для card
//   const safeCard = {
//     photo: card.photo || '/default-image.jpg',
//     type: card.type || 'Тип не указан',
//     city: card.city || 'Город не указан',
//     price: card.price || 0,
//     flors: card.flors || 0,
//     description: card.description || ''
//   };

//   return (
//     <div className="favourite-card">
//       <div className="card-header">
//         <h3>{safeCard.type} в {safeCard.city}</h3>
//         <button 
//           onClick={onToggleFavorite}
//           className={`favorite-btn ${isFavorite ? 'active' : ''}`}
//           aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
//         >
//           {isFavorite ? '❤️' : '♡'}
//         </button>
//       </div>
      
//       <img src={safeCard.photo} alt={`${safeCard.type} в ${safeCard.city}`} />
      
//       <div className="card-info">
//         <p>Цена: {safeCard.price} ₽</p>
//         <p>Этаж: {safeCard.flors}</p>
//         <p className="card-rating">Рейтинг: {rating}/5</p>
//         <p className="card-description">
//           {safeCard.description.substring(0, 100)}
//           {safeCard.description.length > 100 ? '...' : ''}
//         </p>
//       </div>
      
//       <div className="card-reviews">
//         <h4>Комментарии ({reviews.length}):</h4>
//         {reviews.length > 0 ? (
//           <ul>
//             {reviews.slice(0, 2).map((review, idx) => (
//               <li key={`review-${idx}`}>
//                 <p><strong>{review.User?.name || 'Аноним'}:</strong> {review.review}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Пока нет комментариев</p>
//         )}
//       </div>
      
//       <div className="card-actions">
//         <button className="details-btn">Подробнее</button>
//       </div>
//     </div>
//   );
// };

// export default FavouriteCard;



// import React from 'react';
// import './FavouriteCard.css';

// const FavouriteCard = ({ card = {}, isFavorite, rating = 0, reviews = [], onToggleFavorite }) => {
//   // Защитные проверки для card
//   const safeCard = {
//     photo: card.photo || '../public/images/logo.png', // Путь из папки public
//     type: card.type || 'Тип не указан',
//     city: card.city || 'Город не указан',
//     price: card.price || 0,
//     flors: card.flors || 0,
//     description: card.description || ''
//   };

//   return (
//     <div className="favourite-card">
//       <div className="card-header">
//         <h3>{safeCard.type} в {safeCard.city}</h3>
//         <button 
//           onClick={onToggleFavorite}
//           className={`favorite-btn ${isFavorite ? 'active' : ''}`}
//           aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
//         >
//           {isFavorite ? '❤️' : '♡'}
//         </button>
//       </div>
      
//       <img className='photo'
//         src={safeCard.photo} 
//         alt={`${safeCard.type} ${safeCard.city}`} 
//         onError={(e) => {
//           e.target.onerror = null; // Предотвращаем зацикливание
//           e.target.src = '/images/default-image.jpg'; // Запасное изображение при ошибке загрузки
//         }}
//       />
      
//       {/* Остальной код компонента остается без изменений */}
//       <div className="card-info">
//         <p>Цена: {safeCard.price} ₽</p>
//         <p>Этаж: {safeCard.flors}</p>
//         <p className="card-rating">Рейтинг: {rating}/5</p>
//         <p className="card-description">
//           {safeCard.description.substring(0, 100)}
//           {safeCard.description.length > 100 ? '...' : ''}
//         </p>
//       </div>
      
//       <div className="card-reviews">
//         <h4>Комментарии ({reviews.length}):</h4>
//         {reviews.length > 0 ? (
//           <ul>
//             {reviews.slice(0, 2).map((review, idx) => (
//               <li key={`review-${idx}`}>
//                 <p><strong>{review.User?.name || 'Аноним'}:</strong> {review.review}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Пока нет комментариев</p>
//         )}
//       </div>
      
//       <div className="card-actions">
//         <button className="details-btn">Подробнее</button>
//       </div>
//     </div>
//   );
// };

// export default FavouriteCard;



import React from 'react';
import './FavouriteCard.css';

const FavouriteCard = ({ card = {}, isFavorite, rating = 0, reviews = [], onToggleFavorite }) => {
  const safeCard = {
    photo: card.photo || '/public/images/logo.png',
    type: card.type || 'Тип не указан',
    city: card.city || 'Город не указан',
    price: card.price ? `${card.price.toLocaleString()} ₽` : 'Цена не указана',
    flors: card.flors || 'Не указано',
    description: card.description || 'Описание отсутствует'
  };

  return (
    <div className="favourite-card">
      <div className="card-header">
        <h3>{safeCard.type} в {safeCard.city}</h3>
        <button 
          onClick={onToggleFavorite}
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        >
          {isFavorite ? '❤️' : '♡'}
        </button>
      </div>
      
      <img 
        className="photo"
        src={safeCard.photo} 
        alt={`${safeCard.type} в ${safeCard.city}`} 
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/default-image.jpg';
        }}
        loading="lazy"
      />
      
      <div className="card-info">
        <p><strong>Цена:</strong> {safeCard.price}</p>
        <p><strong>Этаж:</strong> {safeCard.flors}</p>
        <p className="card-rating"><strong>Рейтинг:</strong> {rating}/5</p>
        <p className="card-description">
          {safeCard.description.substring(0, 100)}
          {safeCard.description.length > 100 ? '...' : ''}
        </p>
      </div>
      
      <div className="card-reviews">
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
      </div>
      
      <div className="card-actions">
        <button className="details-btn">Подробнее</button>
      </div>
    </div>
  );
};

export default FavouriteCard;