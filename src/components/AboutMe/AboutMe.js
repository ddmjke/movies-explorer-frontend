import AboutMePhoto from '../../images/AboutMePhoto.jpg'
export default function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <img className="aboutme__photo" alt="myphoto" src={AboutMePhoto}></img>
      <div className="aboutme__textbox">
        <h2 className="aboutme__name">Ddmjke</h2>
        <h2 className="aboutme__profession">Фронтенд-разработчик, 12&#160;лет без конфискации</h2>
        <p className="aboutme__about">Пытается делать дипломные работы за&nbsp;1&nbsp;вечер. Не&nbsp;может быть уничтожен конвенционным оружием или быть принужденным к&nbsp;афтобиографии</p>
        <a className="aboutme__link" target="_blank"  rel="noreferrer" href="https://github.com/ddmjke">GitHub</a>

      </div>
    </section>
  );
}