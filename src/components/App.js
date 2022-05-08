import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  let [selectedCard, setSelectedCard] = useState({});
  let [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`));
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCloseAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ isOpen: false });
  }

  function handleCardClick(data) {
    setSelectedCard({
      isOpen: true,
      ...data,
    });
  }

  return (
    <div className="page">
      <Header />

      <CurrentUserContext.Provider value={currentUser}>
        <Main //Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
      </CurrentUserContext.Provider>

      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={handleCloseAllPopups}
        name="edit-profile"
        title="Редактировать профиль"
        button="Сохранить"
        container=""
      >
        <input
          className="popup__input popup__input_profile_name"
          name="name"
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error"></span>
        <input
          className="popup__input popup__input_profile_about"
          name="about"
          type="text"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={handleCloseAllPopups}
        name="add-image"
        title="Новое место"
        button="Создать"
        container=""
      >
        <input
          className="popup__input popup__input_image_name"
          name="image-name"
          type="text"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__error"></span>
        <input
          className="popup__input popup__input_image_link"
          name="image-link"
          type="url"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={handleCloseAllPopups}
        name="update-avatar"
        title="Обновить аватар"
        button="Сохранить"
        container="popup__container_update-avatar"
      >
        <input
          className="popup__input popup__update-avatar"
          name="update-avatar"
          type="url"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="confirm-delete"
        title="Вы уверены?"
        button="Да"
        container="popup__container_confirm-delete"
      >
        <button
          className="popup__save popup__save_confirm-delete"
          type="submit"
        >
          Да
        </button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={handleCloseAllPopups} />
    </div>
  );
}

export default App;
