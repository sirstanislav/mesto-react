import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  let [name, setName] = React.useState();
  let [link, setLink] = React.useState();
  const currentUser = React.useContext(CurrentUserContext);

  function inputName(e) {
    setName(e.target.value);
  }

  function inputLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="add-image"
      title="Новое место"
      button="Создать"
      container=""
    >
      <input
        className="popup__input popup__input_image_name"
        onChange={inputName}
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
        onChange={inputLink}
        name="image-link"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error"></span>
    </PopupWithForm>
  );
}
