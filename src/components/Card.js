import React from "react";

function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="card">
      <img
        className="card__image"
        onClick={handleClick}
        src={card.link}
        alt={card.name}
      />
      <div className="card__navigation">
        <h2 className="card__navigation-title">{card.name}</h2>
        <button
          className="card__navigation-like"
          type="button"
          aria-label="Отметка нравится"
        ></button>
        <span className="card__like-count"></span>
      </div>
      <div className="card__delete"></div>
    </article>
  );
}

export default Card;
