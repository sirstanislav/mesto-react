import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  let [cards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);
  const { avatar, name, about } = currentUser;

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((item) => (item._id === card._id ? newCard : item)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((item) => item._id !== card._id));
    });
  }

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${avatar})` }}
        >
          <div className="profile__avatar-image"></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <button
            className="profile__edit-button"
            onClick={onEditProfile}
            type="button"
            aria-label="Редактирования профиля"
          ></button>
          <p className="profile__about">{about}</p>
        </div>
        <button
          className="profile__add-button"
          onClick={onAddPlace}
          type="button"
          aria-label="Добавить"
        ></button>
      </section>

      <section className="cards" aria-label="Карточки">
        {cards.map((card) => (
          <Card
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            key={card._id}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
