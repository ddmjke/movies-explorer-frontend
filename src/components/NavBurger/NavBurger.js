import { NavLink } from 'react-router-dom';
import React from 'react';
import './NavBurger.css';

export default function NavBurger(props) {

  return (
    <>
      {
        props.isOpen && 
        <nav className="navburger">
          <NavLink className="navburger__logo" to="/"/>
            props.loggedIn
              ?
                <>
                  <NavLink className="navburger__link" to="/movies">Фильмы</NavLink>
                  <NavLink className="navburger__link" to="/saved-movies">Сохраненные фильмы</NavLink>
                  <NavLink className="navburger__profile-button" to="/profile"></NavLink>

                  <button type="buton" className='navburger__button' onClick={props.onClick} />
                </>
              :
                <>
                  <NavLink className="navburger__sign-up" to="/sign-up">Регистрация</NavLink>
                  <NavLink className="navburger__sign-in" to="/sign-in">Войти</NavLink>
                  
                  <button type="buton" className='navburger__button' onClick={props.onClick} />
                </>
          </nav>
      }
    </>
  );
}