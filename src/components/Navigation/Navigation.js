import { NavLink } from 'react-router-dom';
import React from 'react';
import './Navigation.css';
import NavBurger from '../NavBurger/NavBurger'

export default function Navigation(props) {
  const [burgerOpen, toggleBurger] = React.useState(false);

  return (
    <nav className="navigation">
      <NavLink className="navigation__logo" to="/"/>
      {
        props.loggedIn
          ?
            <>
              <NavLink className="navigation__link navigation__link_active" to="/movies">Фильмы</NavLink>
              <NavLink className="navigation__link" to="/saved-movies">Сохраненные фильмы</NavLink>
              <NavLink className="navigation__profile-button" to="/profile">Аккаунт</NavLink>

              <button type="buton" className='navigation__burger' onClick={toggleBurger}>
                <span className="navigation__burger-line"></span>
                <span className="navigation__burger-line"></span>
                <span className="navigation__burger-line"></span>
              </button>
            </>
          :
            <>
              <NavLink className="navigation__sign-up" to="/sign-up">Регистрация</NavLink>
              <NavLink className="navigation__sign-in" to="/sign-in">Войти</NavLink>
            </>
      }
      <NavBurger isOpen={burgerOpen} loggedIn={props.loggedIn} onClick={toggleBurger} />
    </nav>
  );
}