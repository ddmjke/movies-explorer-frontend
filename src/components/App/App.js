import './App.css';
import {  Routes, Route  } from 'react-router-dom';
import Main from '../Main/Main';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<Main />}/>
        {/* <Route path="/movies" element={Movies}/>
        <Route path="/saved-movies" element={SavedMovies}/>
        <Route path="/profile" element={Profile}/>
        <Route path="/sign-in" element={SignIn}/>
        <Route path="/sign-up" element={SignUp}/>
        <Route path="*" element={NotFound}/> */}
      </Routes>      
    </div>
  );
}

