import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Card from "../Card/Card";

export default function Movies() {
  function generateFakeList() {
    let fakeList = [];
    for (let i = 0; i < 10 ; i++){
      fakeList.push(<Card number={i} key={i*10}/>)
    }
    return fakeList;
  };

  return (
    <>
      <header className="header header__place_movies">
        <Navigation loggedIn={true}/>
      </header>
      <main className="movies">
        <SearchForm />
        {/* <Preloader /> */}
        
        <MoviesCardList hasMore={true}>
        { 
          generateFakeList()
        }
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
}