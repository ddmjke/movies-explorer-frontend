import AboutMePhoto from '../../images/AboutMePhoto.jpg'
export default function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <h2 className="aboutme__name">ddmjke</h2>
      <h2 className="aboutme__profession">Фронтенд-разработчик, 100 лет</h2>
      <p className="aboutme__about">делает дипломные работы за 1 вечер. не может быть уничтожен конвенционным оружием</p>

      <a className="aboutme__link" target="_blank"  rel="noreferrer" href="https://github.com/ddmjke">GitHub</a>
      <img className="aboutme__photo" alt="myphoto" src={AboutMePhoto}></img>
    </section>
  );
}