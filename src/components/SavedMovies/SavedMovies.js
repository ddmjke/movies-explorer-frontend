import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies() {

  function generateFakeList() {
    let fakeList = [];
    for (let i = 0; i < 10 ; i += 4){
      fakeList.push(<Card number={i} key={i*10} savedList={true} length={'1h30m'}/>)
    }
    return fakeList;
  };

  return (
    <>
      <header className="header header__place_saved">
        <Navigation loggedIn={true}/>
      </header>

      <main className="movies">
        <SearchForm />
        <MoviesCardList hasMore={false}>
          { 
            generateFakeList()
          }
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
}