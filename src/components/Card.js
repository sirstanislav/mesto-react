import React from 'react'


function Card(props) {

  function handleClick() {
    props.onCardClick(props);
  }

  return (
    <article className="card">
      <img className="card__image" onClick={handleClick} src={props.link} alt={props.name}/>
      <div className="card__navigation">
        <h2 className="card__navigation-title">{props.name}</h2>
        <button className="card__navigation-like" type="button" aria-label="Отметка нравится"></button>
        <span className="card__like-count"></span>
      </div>
      <div className="card__delete"></div>
    </article>
  )
}

export default Card