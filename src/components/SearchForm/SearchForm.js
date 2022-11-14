import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormAndValidation from "../../hooks/useFormAndValidation";

export default function SearchForm(props) {

  const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation();

  const [box, setBox] = React.useState(false);

  return (
    <form className="search" noValidate onSubmit={e => {
      e.preventDefault();
      props.handleSubmit(values.request, box);
      }}>
        <label className="search__field"> 
              <input 
                name='request'
                value={values.request || ''}
                onChange={handleChange}
                className="search__input"
                type="string" id="request" placeholder="Фильмы"
                required
              />
              <button className="search__submit" type="submit">Найти</button>
              <span className="search__error">
                {errors.request}
              </span>          
        </label>
        <FilterCheckbox onClick={() => setBox(!box)}/>
    </form>
  );
}