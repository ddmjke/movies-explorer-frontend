export default function About() {
  return (
    <section className="about">
      <h2 className="about__title">О проекте</h2>


      <ul className="about__list">
        <li>
          <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li>
          <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>

      <ul className="about__visual">
        <li className="about__visual__block">
          <h3 className="about__visual__length">1 неделя</h3>
          <p className="about__visual__subtitle">Back-end</p>
        </li>
        <li className="about__visual__block">
          <h3 className="about__visual__length">4 недели</h3>
          <p className="about__visual__subtitle">Front-end</p>
        </li>
      </ul>


    </section>
  );
}