import React from "react";

export default function FilterCheckbox() {
  const [checked, toggleChecked] = React.useState(false);

  return (
    <label className="search__toggle">
      <input
            className = "search__toggle-chekbox"  
            type = "checkbox" 
            name = "shortFilter"
            id = "shortFilter"
            checked = {checked}
            onChange = {() => toggleChecked(!checked)}/>
      <span className={`search__toggle__custom ${checked && 'search__toggle__custom_checked'}`}></span>
      <span className="search__toggle-description">Короткометражки</span>
    </label>
  )
}