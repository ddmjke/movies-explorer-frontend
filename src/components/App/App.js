import './App.css';
import React from 'react';
import {  Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import LogIn from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import moviesUtils from '../../utils/moviesUtils';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

export default function App() {
  let navigate = useNavigate();

  //global variables
  const [currentUser, setCurrentUser] = React.useState(JSON.parse(localStorage.getItem('currentUser')) || null);
  const [movies, setMovies] = React.useState(localStorage.getItem('movies') || []);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('token') && true);

  //network status and errors
  const [pending, setPending] = React.useState(false);
  const [networkError, setNetworkError] = React.useState('');

  // search variables
  const [searchText, setSearchText] = React.useState(localStorage.getItem('searchText') || '');
  const [searchBox, setSearchBox] = React.useState(JSON.parse(localStorage.getItem('searchBox')));
  const [filteredMovies, setFilteredMovies] = React.useState(JSON.parse(localStorage.getItem('filteredMovies')) || []);

  // savedSearch variables
  const [savedSearchText, setSavedSearchText] = React.useState('');
  const [savedSearchBox, setSavedSearchBox] = React.useState(false);
  const [savedFilteredMovies, setSavedFilteredMovies] = React.useState([]);

  //loading initial movie list
  React.useEffect(() => {
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    localStorage.setItem('searchBox', JSON.stringify(searchBox));
    localStorage.setItem('searchText', searchText);

  }, [filteredMovies, searchBox, searchText]);

  React.useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  React.useEffect(() => {
    moviesApi.getMovies()
      .then(movies => movies.map(moviesUtils.preSave))
      .then(movies => setMovies(movies))
      .catch(e => console.log('Failed to load initial movies list :', e))
      .finally(() => {
        if (localStorage.getItem('token')) mainApi.getUser()
          .then((user) => {
            setCurrentUser(user);
            setLoggedIn(true);
            return loadSavedMovies();
          })
          .catch(e => {
            setSearchBox(false);
            setSearchText('');
            setFilteredMovies([]);
            setLoggedIn(false);
            setCurrentUser(null);
            console.log('your token is no good :', e);
            navigate('/sign-in');
          })
      });
  }, []);

  const setErrorText = (text) => {
    setNetworkError(text);
    setTimeout(() => {setNetworkError('')}, 3000);
  }

  //user-related functions
  const register = (args) => {
    setPending(true);
    return mainApi.register(args)
      .then((res) => {
        localStorage.setItem('token', res.token);
        return mainApi.getUser();
      })
      .then((user) => {
        setCurrentUser({
          name: user.name,
          email: user.email
        });
        setLoggedIn(true);
        navigate('/movies');
        return loadSavedMovies();
      })
      .catch((e) => {
        setErrorText(`failed to register :${e}`);
        return Promise.resolve();
      })
      .finally(() => {
        setPending(false);
      });

  }

  const logIn = (args) => {
    setPending(true)
    return mainApi.logIn(args)
      .then((res) => {
        localStorage.setItem('token', res.token);
        return mainApi.getUser();
      })
      .then((user) => {
        setCurrentUser({
          name: user.name,
          email: user.email
        });
        setLoggedIn(true);
        setFilteredMovies(JSON.parse(localStorage.getItem(filteredMovies)) || []);
        setSearchBox(JSON.parse(localStorage.getItem('searchBox')) || false);
        setSearchText(localStorage.getItem('searchText') || '');
        navigate('/movies');
        return loadSavedMovies();
      })
      .catch((e) => {
        setLoggedIn(false);
        setFilteredMovies([]);
        setSearchBox(false);
        setSearchText('');
        setErrorText(`failed to logIn :${e}`);

      })
      .finally(() => {
        setPending(false);
      })
  }

  const logOut = () => {
    setLoggedIn(false);
    localStorage.setItem('token', '');
    setCurrentUser({
      name: '',
      email: ''
    });
    setSearchBox(false);
    setSearchText('');
    setFilteredMovies([]);
    setSavedMovies([]);
    localStorage.setItem('savedMovies', []);
  }

  const patchUser = (args) => {
    setPending(true);
    return mainApi.patchUser({
      name: args.name,
      email: args.email
    })
      .then(setCurrentUser)
      .catch((e) => setErrorText(`failed to patch user :${e}`))
      .finally(() => setPending(false))
  }

  //movies-related functions
  const loadSavedMovies = () => {
    return mainApi.getMovies()
      .then(movies => {
        setSavedMovies(movies || []);
        setSavedFilteredMovies(movies || []);
        return Promise.resolve(movies);
      })
  }

  const handleSearchSubmit = (text, box) => {
    setSearchText(text);
    setSearchBox(box);
    if (text === '') {
      setErrorText('Нужно ввести ключевое слово!');
    } else {
      const filtered = moviesUtils.searchName(movies, text, box);
      if (filtered.length === 0) setErrorText('Found nothing, try something else!');
      setFilteredMovies(filtered);
    }
  }

  const handleSavedSearchSubmit = (text, box) => {
    setSavedSearchText(text);
    setSavedSearchBox(box);
    const filtered = moviesUtils.searchName(savedMovies, text, box);
    if (filtered.length === 0) setErrorText('Found nothing, try something else!');
    setSavedFilteredMovies(filtered);
  }

  const handleSaveClick = (args) => {
    return mainApi.postMovie(args)
      .then(() => {
        return loadSavedMovies();
      })
  }

  const handleDeleteClick = (args) => {
    return mainApi.deleteMovie(args)
      .then(() => {
        return loadSavedMovies();
      })
      .then(movies => {
        const filtered = moviesUtils.searchName(movies, savedSearchText, savedSearchBox);
        setSavedFilteredMovies(filtered);
      })
  }

  const findOneAndDelete = (args) => {
    const savedOne = savedMovies.find(movie => movie.movieId === args.movieId);
    handleDeleteClick(savedOne);
  }

  return (
    <CurrentUserContext.Provider value={currentUser || ''}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />}/>

          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies 
                loggedIn={loggedIn}
                movies={filteredMovies}
                savedMoviesId={savedMovies.map(movie => movie.movieId)}
                onSubmit={handleSearchSubmit}
                searchText={searchText}
                searchBox={searchBox}
                movieClick={handleSaveClick}
                deleteMovieClick={findOneAndDelete}
                pending={pending}
                errorText={networkError}
                />
            </ProtectedRoute>
          }/>
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies 
                loggedIn={loggedIn}
                movies={savedFilteredMovies}
                savedMovies={savedMovies}
                onSubmit={handleSavedSearchSubmit}
                searchText={savedSearchText}
                searchBox={savedSearchBox}
                movieClick={handleDeleteClick}
                pending={pending}
                errorText={networkError}
              />
            </ProtectedRoute>
          }/>

          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile user={currentUser} onSubmit={patchUser} onLogOut={logOut} pending={pending} errorText={networkError}/>
            </ProtectedRoute>
          }/>
          <Route path="/sign-in" element={
            <ProtectedRoute loggedIn={!loggedIn}>
              <LogIn onSubmit={logIn} pending={pending} errorText={networkError}/>
            </ProtectedRoute>
          }/>
          <Route path="/sign-up" element={
            <ProtectedRoute loggedIn={!loggedIn}>
              <Register onSubmit={register} pending={pending} errorText={networkError}/>
            </ProtectedRoute>
          }/>

          <Route path="*" element={<NotFound/>}/>
        </Routes>      
      </div>
    </CurrentUserContext.Provider>
  );
}

