export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <p className="footer__copy">&copy; {new Date().getFullYear()}</p>
      <a className="footer__link" target="_blank"  rel="noreferrer" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
      <a className="footer__link" target="_blank"  rel="noreferrer" href="https://github.com/ddmjke">GitHub</a>
    </footer>
  );
}