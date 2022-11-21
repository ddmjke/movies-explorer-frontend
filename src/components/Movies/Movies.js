import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Card from "../Card/Card";


export default function Movies(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [increment, setIncrement] = React.useState(0);
  const [length, setLength] = React.useState(0);

  React.useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    }

    if (width <= 500) {
      setLength(5);
      setIncrement(3);
    } else if (width <= 975) {
      setLength(6);
      setIncrement(2);
    } else if (width <= 1255) {
      setLength(9);
      setIncrement(3);
    } else {
      setLength(12);
      setIncrement(4);
    }
    
    window.addEventListener('resize',resize);

    return window.removeEventListener('resize', resize);
  }, [width]);

  const handleMore = () => {
    setLength(length + increment);
  }  

  return (
    <>
      <header className="header header__place_movies">
        <Navigation loggedIn={props.loggedIn}/>
      </header>
      <main className="movies">
        <SearchForm 
          handleSubmit={props.onSubmit}
          request={props.searchText}
          box={props.searchBox}
          pending={props.pending}
          errorText={props.errorText}
          />
       
        <MoviesCardList hasMore={props.movies.length > length} onMore={handleMore}>
        {
          props.movies.slice(0, length).map((movie, i) => <Card 
            key={i}
            savedList={false}
            length={movie.duration}
            image={movie.image}
            name={movie.nameRU}
            trailer={movie.trailerLink}
            saved={props.savedMoviesId.includes(movie.movieId)}
            onClick={() => {props.movieClick(movie)}} 
            onDelete={() => {props.deleteMovieClick(movie)}}
            />)
        }
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
}