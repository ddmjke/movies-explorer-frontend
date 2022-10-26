import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";

export default function SavedMovies() {

  function generateFakeList() {
    let fakeList = [];
    for (let i = 0; i < 10 ; i += 4){
      fakeList.push(<Card number={i} key={i*10}/>)
    }
    return fakeList;
  };

  return (
    <>
      <header className="header header__place_saved">
        <Navigation loggedIn={true}/>
      </header>
      <main className="movies">
        {
          generateFakeList()
        }
      </main>
      <Footer />
    </>
  );
}