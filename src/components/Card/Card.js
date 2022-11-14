export default function Card(props) {
  return (
    <div className="card">
      <img className="card__photo" src={props.image} alt={props.name} onClick={e => e} />
      <div className="card__caption">
        <h2 className="card__textbox">{props.name}</h2>
        {
          props.savedList
            ?
            <button className="card__unsave" type="button" onClick={e => e}></button>
            :
            <button className="card__saved" type="button" onClick={e => e}></button>
        }
      </div>
      <p className="card__length">{`
        ${Math.floor(props.length / 60)} ч ${props.length % 60} мин
        `}</p>
    </div>
  )
}