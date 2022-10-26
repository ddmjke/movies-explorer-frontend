import React from "react";

export default function FilterCheckbox() {
  const [checked, toggleChecked] = React.useState(false);

  return (
    <label className="search__toggle">
      <input
            className = "search__toggle-checkbox"  
            type = "checkbox" 
            name = "shortFilter"
            id = "shortFilter"
            checked = {checked}
            onChange = {toggleChecked}/>
      <span className="search__toggle-description">Короткометражки</span>
    </label>
  )
}