
export default function Card(props) {
  return (
    <div className="card">
      <img className="card__photo" src={props.image} alt={props.name} onClick={() => {window.open(props.trailer, '_blank')}} />
      <div className="card__caption">
        <h2 className="card__textbox">{props.name}</h2>
        {
          props.savedList
            ?
            <button 
              className="card__unsave"
              type="button"
              onClick={props.onClick}
              ></button>
            :
            <button 
              className={`card__saved ${props.saved && 'card__saved_active'}`}
              type="button"
              onClick={() => {
                if (!props.saved) props.onClick();
                  else props.onDelete();
                }}
              ></button>
        }
      </div>
      <p className="card__length">{`
        ${Math.floor(props.length / 60)} ч ${props.length % 60} мин
        `}</p>
    </div>
  )
}