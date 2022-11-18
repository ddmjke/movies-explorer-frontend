import React from "react";

export default function FilterCheckbox(props) {
  return (
    <label className="search__toggle">
      <input
            className = "search__toggle-chekbox"  
            type = "checkbox" 
            name = "shortFilter"
            id = "shortFilter"
            checked = {props.checked}
            onChange = {props.onClick}/>
      <span className={`search__toggle__custom ${props.checked && 'search__toggle__custom_checked'}`}></span>
      <span className="search__toggle-description">Короткометражки</span>
    </label>
  )
}