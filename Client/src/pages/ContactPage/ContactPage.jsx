// import React from 'react';
// import './ContactPage.css';

// export default function ContactPage() {
//   return (
//     <div className="contact-page">
//       <h1 className="contact-title">Наши контакты</h1>
//       <div className="contact-info-container">
//         <div className="contact-info">
//           <h2>Свяжитесь с нами</h2>
          
//           <div className="contact-item">
//             <div className="contact-icon">📍</div>
//             <div>
//               <h3>Адрес</h3>
//               <p>ОАЭ, г. Дубай, Бурдж-Халифа, оф. 1</p>
//             </div>
//           </div>
          
//           <div className="contact-item">
//             <div className="contact-icon">📞</div>
//             <div>
//               <h3>Телефон</h3>
//               <p>+7 (777) 777-77-77</p>
//             </div>
//           </div>
          
//           <div className="contact-item">
//             <div className="contact-icon">✉️</div>
//             <div>
//               <h3>Email</h3>
//               <p>Hata@Dubai.com</p>
//             </div>
//           </div>
          
//           <div className="contact-item">
//             <div className="contact-icon">🕒</div>
//             <div>
//               <h3>Часы работы</h3>
//               <p>Пн-Пт: выходной</p>
//               <p>Сб-Вс: выходной</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <div className="contact-page">
      <h1 className="contact-title">Наши контакты</h1>
      
      <div className="contact-info-container">
        <div className="contact-info">
          <h2>Свяжитесь с нами</h2>
          
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Адрес</h3>
              <p>ОАЭ, г. Дубай, Бурдж-Халифа, оф. 1</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Телефон</h3>
              <p>+7 (777) 777-77-77</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <h3>Email</h3>
              <p>Hata@Dubai.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">🕒</div>
            <div>
              <h3>Часы работы</h3>
              <p>Пн-Пт: выходной</p>
              <p>Сб-Вс: выходной</p>
            </div>
          </div>

          <button 
            className="team-btn"
            onClick={() => setShowTeam(true)}
          >
            IT команда
          </button>
        </div>
      </div>

      {showTeam && (
        <div className="team-modal">
          <div className="team-modal-content">
            <span 
              className="close-modal"
              onClick={() => setShowTeam(false)}
            >
              &times;
            </span>
            <h3>А это разработчики нашего приложения:</h3>
            <div className="team-photos">
              <div className="team-member">
                <img src="/images/Ivan.png" alt="Разработчик 1" />
                <p>Иван Крестоношин</p>
                <p>Frontend разработчик</p>
              </div>
              <div className="team-member">
                <img src="/images/Alena.png" alt="Разработчик 2" />
                <p>Алёна Топал</p>
                <p>Backend разработчик</p>
              </div>
              <div className="team-member">
                <img src="/images/Aza.png" alt="Разработчик 3" />
                <p>Азамат Болатчиев</p>
                <p>Моральная поддержка</p>
              </div>
            </div>
            <div className="ura-common-label">За проект им не заплатили, поэтому они все еще живут в подвале</div>
          </div>
        </div>
      )}
    </div>
  );
}