import { NavLink } from 'react-router-dom';
import React from 'react';
import './NavBurger.css';

export default function NavBurger(props) {

  return (
    props.isOpen &&
    <div className="navburger__overlay" onClick={e => props.onClick()}>
        <nav className="navburger" onClick={e => e.stopPropagation()}>
                  <NavLink className="navburger__link" to="/">Главная</NavLink>
                  <NavLink className="navburger__link" to="/movies">Фильмы</NavLink>
                  <NavLink className="navburger__link navburger__link_active" to="/saved-movies">Сохраненные фильмы</NavLink>
                  <NavLink className="navburger__profile-button" to="/profile">Аккаунт</NavLink>

                  <button type="buton" className='navburger__button' onClick={e => props.onClick()} />
        </nav>
    </div>
  );
}