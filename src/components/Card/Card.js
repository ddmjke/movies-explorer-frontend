import fakePhoto from '../../images/fakePhoto.png';

export default function Card(props) {
  return (
    <div className="card">
      <img className="card__photo" src={fakePhoto} alt={`fake alt #${props.number}`} onClick={e => e} />
      <div className="card__caption">
        <h2 className="card__textbox">fake description #{props.number}</h2>
        {
          props.savedList
            ?
            <button className="card__unsave" type="button" onClick={e => e}></button>
            :
            <button className="card__saved" type="button" onClick={e => e}></button>
        }
      </div>
      <p className="card__length">{props.length}</p>
    </div>
  )
}