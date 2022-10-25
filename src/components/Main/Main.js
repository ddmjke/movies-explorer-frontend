import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import About from "../About/About";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";

export default function Main() {
  return (
    <main className="main">
      <header className="header header__place_main">
        <Navigation loggedIn={false}/>
      </header>

      <Promo />
      <About />
      <Techs />
      <AboutMe />

      <Footer />
    </main>
  );
}