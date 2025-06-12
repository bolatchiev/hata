// import React from 'react'

// export default function FavouriteForm() {
//   const favouriteItems = [
//     {
//       id: 1,
//       photo: 'url-to-photo1',
//       rating: 4.5,
//       city: 'Москва',
//       isLiked: true,
//       comments: [
//         { id: 1, text: 'Отличный вариант!', author: 'User1' },
//         { id: 2, text: 'Хорошая цена', author: 'User2' }
//       ]
//     },
//     {
//       id: 2,
//       photo: 'url-to-photo2',
//       rating: 3.8,
//       city: 'Санкт-Петербург',
//       isLiked: true,
//       comments: [
//         { id: 3, text: 'Уютное место', author: 'User3' }
//       ]
//     }
//   ]

//   return (
//     <div className="favourite-page">
//       <h1>Избранное</h1>
      
//       <div className="favourite-list">
//         {favouriteItems.map(item => (
//           <div key={item.id} className="favourite-item">
//             {/* Карточка объявления */}
//             <div className="item-card">
//               <img src={item.photo} alt="Недвижимость" />
//               <div className="item-info">
//                 <span>Оценка: {item.rating}</span>
//                 <span>Город: {item.city}</span>
//                 <button className="like-button">{item.isLiked ? '❤️' : '♡'}</button>
//                 <button className="details-button">Подробнее</button>
//               </div>
//             </div>
            
//             {/* Комментарии */}
//             <div className="item-comments">
//               <h3>Комментарии:</h3>
//               {item.comments.map(comment => (
//                 <div key={comment.id} className="comment">
//                   <p>{comment.text}</p>
//                   <span>- {comment.author}</span>
//                 </div>
//               ))}
              
//               {/* Форма добавления комментария */}
//               <div className="add-comment">
//                 <textarea placeholder="Оставьте ваш комментарий..." />
//                 <button>Отправить</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

