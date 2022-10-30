import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
  return (
    <form className="search" noValidate onSubmit={e => e.preventDefault()}>
        <label className="search__field"> 
              <input 
                name='request'
                value={''}
                onChange={e => e}
                className="search__input"
                type="string" id="request" placeholder="Фильмы"
                required
              />
              <button className="search__submit" type="submit">Найти</button>
              <span className="search__error">
                {' '}
              </span>          
        </label>
        <FilterCheckbox />
    </form>
  );
}