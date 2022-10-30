import './App.css';
import {  Routes, Route  } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import LogIn from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/saved-movies" element={<SavedMovies />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/sign-in" element={<LogIn/>}/>
        <Route path="/sign-up" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>      
    </div>
  );
}

