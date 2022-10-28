import promoImage from '../../images/PromoImage.svg'

export default function Promo() {
  return (
    <section className="promo">
      <div className='promo__textbox'>
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className="promo__more">Узнать больше</button>
      </div>
      <img className="promo__logo" alt="promo logo" src={promoImage}/>
    </section>
  );
}