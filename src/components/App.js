import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import Card from './Card';

function App() {

	let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
	let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
	let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
	let [closeAllPopups, setCloseAllPopups] = useState(true)
	let [selectedCard, setSelectedCard] = useState([])

	
	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true)
		isEditProfilePopupOpen && document.querySelector('.popup_edit-profile').classList.add('popup_enable')
	}
	
	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true)
		isAddPlacePopupOpen && document.querySelector('.popup_add-image').classList.add('popup_enable')
	}

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true)
		isEditAvatarPopupOpen && document.querySelector('.popup_update-avatar').classList.add('popup_enable')
	}

	function handleCloseAllPopups(event){
		closeAllPopups && event.target.closest('.popup').classList.remove('popup_enable')
	}

	function handleCardClick(link){
		console.log(link)
		setSelectedCard(link)
		document.querySelector('.popup_image-view').classList.add('popup_enable')
	}

	return (
    <div className="page">

			<Header />
			<Main
			
				onEditProfile = {
					handleEditProfileClick
				}

				onAddPlace = {
					handleAddPlaceClick
				}
				
				onEditAvatar = {
					handleEditAvatarClick
				}

				onCardClick = {
					handleCardClick
				}

			/>

			<Main/>

			<Footer />

			<PopupWithForm isOpen={isEditProfilePopupOpen} onClose={handleCloseAllPopups} name='edit-profile' title='Редактировать профиль' button='Сохранить' container=''>
				<input className="popup__input popup__input_profile_name" name="name" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
				<span className="popup__error"></span>
				<input className="popup__input popup__input_profile_about" name="about" type="text" placeholder="О себе" minLength="2" maxLength="200" required /> 
				<span className="popup__error"></span>
			</PopupWithForm>

			<PopupWithForm isOpen={isAddPlacePopupOpen} onClose={handleCloseAllPopups} name='add-image' title='Новое место' button='Создать' container=''>
				<input className="popup__input popup__input_image_name" name="image-name" type="text" placeholder="Название" minLength="2" maxLength="30" required />
				<span className="popup__error"></span>
				<input className="popup__input popup__input_image_link" name="image-link" type="url" placeholder="Ссылка на картинку" required />
				<span className="popup__error"></span>
			</PopupWithForm>

			<PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={handleCloseAllPopups} name='update-avatar' title='Обновить аватар' button='Сохранить' container='popup__container_update-avatar'>
				<input className="popup__input popup__update-avatar" name="update-avatar" type="url" placeholder="Ссылка на картинку" required />
				<span className="popup__error"></span>
			</PopupWithForm>

			<PopupWithForm name='confirm-delete' title='Вы уверены?' button='Да' container='popup__container_confirm-delete'>
				<button className="popup__save popup__save_confirm-delete" type="submit">Да</button>
			</PopupWithForm>

			<ImagePopup card={selectedCard} onClose={handleCloseAllPopups}/>

    </div>
  );
}

export default App;
