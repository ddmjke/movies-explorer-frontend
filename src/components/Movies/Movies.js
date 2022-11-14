import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Card from "../Card/Card";

export default function Movies(props) {

  return (
    <>
      <header className="header header__place_movies">
        <Navigation loggedIn={true}/>
      </header>
      <main className="movies">
        <SearchForm handleSubmit={props.onSubmit}/>
       
        <MoviesCardList hasMore={props.movies.length > 12}>
        {
          props.movies.map((movie, i) => <Card key={i} length={movie.duration} image={movie.image} name={movie.nameRU}/>)
        }
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
}