import fakePhoto from '../../images/fakePhoto.png';

export default function Card(props) {
  return (
    <div className="card">
      <img className="card__photo" src={fakePhoto} alt={`fake alt #${props.number}`} onClick={e => e} />
      <div className="card__caption">
        <h2 className="card__textbox">fake description #{props.number}</h2>
        <div className="photo-grid__likewrapper">
          <button className={`card__save-button`} type="button" onClick={e => e}></button>
        </div>
      </div>
    </div>
  )
}