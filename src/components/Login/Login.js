import { NavLink } from "react-router-dom";

export default function LogIn() {
  return (
    <section className="login">
      <NavLink className="navigation__logo" to="/"/>
      <h2 className="login__title">Рады видеть!</h2>

      <form className="login__form" noValidate onSubmit={e => e.preventDefault()}>
        <label className="login__field">
          <input  
                // onChange={handleChange}
                name="email"
                // value={'fake Email'}
                className="login__input login__input_field_email"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
          <span className="login__input-error">{''}</span>
        </label>

        <label className="login__field">
          <input  
                // onChange={handleChange}
                name="password"
                // value={'fake password'}
                className="login__input login__input_field_password"
                type="password"
                id="password"
                placeholder="password"
                required
              />
          <span className="login__input-error">{''}</span>
        </label>

        <button 
              className="login__submit-button"
              disabled={false}
              type="submit" >
          Войти
        </button>  
      </form>
      <h2 className="login__redirect">
        Ещё не зарегистрированы?
        <NavLink className="login__redirect-link" to="/sign-up">Регистрация</NavLink>
      </h2>
    </section>
  );
}