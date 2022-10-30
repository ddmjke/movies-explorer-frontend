import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Profile() {
  return (
    <>
    <header className="header header_place_profile">
      <Navigation loggedIn={true} />
    </header>
    <section className="profile">
      <h2 className="profile__title">Привет, FakeName!</h2>

      <form className="profile__form" noValidate onSubmit={e => e.preventDefault()}>

        <label className="profile__field">
          <span className="profile__input-description">Имя</span>
          <input  
                // onChange={handleChange}
                name="name"
                // value={'fake password'}
                className="profile__input profile__input_field_name"
                type="name"
                id="name"
                placeholder="name"
                required
              />
          <span className="profile__input-error">{''}</span>
        </label>

        <label className="profile__field">
          <span className="profile__input-description">E-mail</span>
          <input  
                // onChange={handleChange}
                name="email"
                // value={'fake Email'}
                className="profile__input profile__input_field_email"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
          <span className="profile__input-error">{''}</span>
        </label>

        <button 
              className="profile__submit-button"
              disabled={false}
              onClick={e => e.preventDefault()}
              type="submit" >
          Редактировать
        </button>  
      </form>
        <NavLink className="profile__redirect-link" to="/">Выйти из аккаунта</NavLink>
    </section>
    </>
  );
}