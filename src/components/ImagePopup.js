function ImagePopup(props) {
  return (
    <section className="popup popup_image-view">
      <div className="popup__image">
        <img className="popup__image-full" src={props.card.link} alt={props.card.name}/>
        <h2 className="popup__image-title">{props.card.name}</h2>
        <button className="popup__close popup__close_image" onClick={props.onClose} type="reset" aria-label="Закрыть"></button>
      </div>
	  </section>
  )
}

export default ImagePopup