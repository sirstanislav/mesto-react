import React, { useEffect, useState } from "react"
import {api} from '../utils/Api'
import Card from './Card'

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  let [userName, setUserName] = useState()
  let [userDescription, setUserDescription] = useState()
  let [userAvatar, setUserAvatar] = useState()
  let [cards, setCards] = useState([])


  useEffect(() => {
    api.getAvatar()
      .then((res) => {
        setUserAvatar(res.avatar)
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))

    api.getProfile()
      .then((res) => {
        setUserName(res.name)
        setUserDescription(res.about)
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))

    api.getInitialCards()
    .then((res) => {
      setCards(res)
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
  }, [])

  return(
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} >
          <div className="profile__avatar-image"></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" onClick={onEditProfile} type="button" aria-label="Редактирования профиля"></button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} type="button" aria-label="Добавить"></button>
      </section>

      <section className="cards" aria-label="Карточки">
        {
          cards.map((card) => (
            <Card {...card} onCardClick={onCardClick} key={card._id}/>
          ))
        }
      </section>
		</main>
  )
}

export default Main