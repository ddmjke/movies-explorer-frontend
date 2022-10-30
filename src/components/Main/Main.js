import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import About from "../About/About";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

export default function Main() {
  return (
    <>
      <header className="header header__place_main">
        <Navigation loggedIn={false}/>
      </header>
      <main className="main">
        <Promo />
        <About />
        <Techs />
        <AboutMe />
        <Portfolio />

      </main>
      <Footer />
    </>
  );
}