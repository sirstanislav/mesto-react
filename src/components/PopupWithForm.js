function PopupWithForm(props) {
  
  return (
    <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_enable' : ''}`}>
      <div className={`popup__container ${props.container}`}>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>

          {props.children}

          <button className="popup__save" type="submit">{props.button}</button>
        </form>	
        <button className="popup__close" onClick={props.onClose} type="reset" aria-label="Закрыть"></button>
      </div>
    </section>
  )
}

export default PopupWithForm