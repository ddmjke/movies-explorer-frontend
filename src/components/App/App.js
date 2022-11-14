import './App.css';
import React from 'react';
import {  Routes, Route  } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import LogIn from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import moviesUtils from '../../utils/moviesUtils';
import moviesApi from '../../utils/MoviesApi';

export default function App() {
  //global variables
  const [movies, setMovies] = React.useState(localStorage.getItem('movies') || []);

  // searchBox variables
  const [searchText, setSearchText] = React.useState(localStorage.getItem('serchText') || '');
  const [searchBox, setSearchBox] = React.useState(localStorage.getItem('serchBox'));
  const [filteredMovies, setFilteredMovies] = React.useState(localStorage.getItem('filteredMovies') || []);

  //loading initial movie list
  React.useEffect(() => {
    moviesApi.getMovies()
      .then(movies => movies.map(moviesUtils.preSave))
      .then(movies => setMovies(movies))
      .catch(e => console.log('Failed to load initial movies list :', e))
      .finally(() => console.log('movieslist complete, happy fixing!'))
  }, [])

  const handleSearchSubmit = (text, box) => {
    setSearchText(text);
    setSearchBox(box);
    setFilteredMovies(moviesUtils.searchName(movies, text, box));
  }


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/movies" element={
          <Movies 
            movies={filteredMovies}
            onSubmit={handleSearchSubmit}
            serchText={searchText}
            searchBox={searchBox}  
            />
        }/>
        <Route path="/saved-movies" element={<SavedMovies />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/sign-in" element={<LogIn/>}/>
        <Route path="/sign-up" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>      
    </div>
  );
}

