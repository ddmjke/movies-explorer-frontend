import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies(props) {
  return (
    <>
      <header className="header header__place_saved">
        <Navigation loggedIn={props.loggedIn}/>
      </header>

      <main className="movies">
        <SearchForm 
          handleSubmit={props.onSubmit}
          pending={props.pending}
          errorText={props.errorText}  
          />
        <MoviesCardList hasMore={false}>
          { 
            props.movies.map((movie, i) => <Card 
              key={i}
              savedList={true}
              length={movie.duration}
              image={movie.image}
              name={movie.nameRU}
              onClick={() => {props.movieClick(movie)}} 
            />)
          }
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
}