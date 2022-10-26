export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li>
          <a className="portfolio__link" target="_blank"  rel="noreferrer" href="https://practicum.yandex.ru">Статичный сайт</a>
        </li>
        <li>
          <a className="portfolio__link" target="_blank"  rel="noreferrer" href="https://practicum.yandex.ru">Адаптивный сайт</a>
        </li>
        <li>
          <a className="portfolio__link" target="_blank"  rel="noreferrer" href="https://practicum.yandex.ru">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}