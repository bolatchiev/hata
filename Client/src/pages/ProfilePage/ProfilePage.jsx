import React, { useState } from "react";
import CardList from "../../widgets/CardList/CardList";
import AddCardForm from "../../features/AddCardForm/AddCardForm";
import "./ProfilePage.css";

export default function ProfilePage({ user }) {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1 className="profile-title">Привет, {user.name}</h1>

        <div className="welcome-card">
          <div className="welcome-content">
            <h3>Добро пожаловать на наш сервис аренды недвижимости! 🏡</h3>

            <div className="features-list">
              <div className="feature-item">
                <span>
                  <strong>Сдать жилье</strong> – разместите объявление и
                  находите надежных арендаторов
                </span>
              </div>

              <div className="feature-item">
                <span>
                  <strong>Снять квартиру</strong> – ищите подходящие варианты и
                  связывайтесь с владельцами
                </span>
              </div>

              <div className="feature-item">
                <span>
                  <strong>Управлять бронированиями</strong> – отслеживайте
                  статус заявок и платежей
                </span>
              </div>
            </div>

            <div className="getting-started">
              <h4>Как начать?</h4>

              <div className="step-item">
                <div>
                  <p>
                    <strong>Хотите сдать жилье?</strong>
                  </p>
                  <p>
                    Нажмите "Добавить объявление", заполните детали (фото,
                    описание, цена) и опубликуйте.
                  </p>
                </div>
              </div>

              <div className="step-item">
                <div>
                  <p>
                    <strong>Ищете квартиру?</strong>
                  </p>
                  <p>
                    Используйте поиск или фильтры, чтобы найти идеальный
                    вариант.
                  </p>
                </div>
              </div>

              <div className="step-item">
                <div>
                  <p>
                    <strong>Безопасность</strong>
                  </p>
                  <p>
                    Все сделки проходят через безопасные платежи, а мы помогаем
                    выбрать проверенных арендодателей и жильцов.
                  </p>
                </div>
              </div>
            </div>

            <p className="cta-text">
              <strong>Готовы к комфортной аренде?</strong>
            </p>
          </div>
        </div>

        <div className="add-card-btn-container">
          <button className="btn add-btn" onClick={() => setShowAddForm(true)}>
            Добавить карточку
          </button>
        </div>
      </div>

      {showAddForm && (
        <AddCardForm userId={user.id} onClose={() => setShowAddForm(false)} />
      )}

      <div className="cards-scroll-container">
        <div className="cards-row">
          <CardList user={user} />
        </div>
      </div>
    </div>
  );
}
