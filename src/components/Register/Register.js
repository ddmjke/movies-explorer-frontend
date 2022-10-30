import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <section className="register">
      <NavLink className="navigation__logo" to="/"/>
      <h2 className="register__title">Добро пожаловать!</h2>

      <form className="register__form" noValidate onSubmit={e => e.preventDefault()}>
        <label className="register__field">
        <span className="register__input-description">Имя</span>

          <input  
                // onChange={handleChange}
                name="name"
                // value={'fake Name'}
                className="register__input register__input_field_name"
                type="string"
                id="name"
                placeholder="Name"
                required
              />
          <span className="register__input-error">{''}</span>
        </label>

        <label className="register__field">
        <span className="register__input-description">E-mail</span>

          <input  
                // onChange={handleChange}
                name="email"
                // value={'fake Email'}
                className="register__input register__input_field_email"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
          <span className="register__input-error">{''}</span>
        </label>

        <label className="register__field">
        <span className="register__input-description">password</span>

          <input  
                // onChange={handleChange}
                name="password"
                // value={'fake password'}
                className="register__input register__input_field_password"
                type="password"
                id="password"
                placeholder="password"
                required
              />
          <span className="register__input-error">{''}</span>
        </label>

        <button 
              className="register__submit-button"
              disabled={false}
              type="submit" >
          Зарегистрироваться
        </button>  
      </form>
      <h2 className="register__redirect">
        Уже зарегистрированы?
        <NavLink className="register__redirect-link" to="/sign-in">Войти</NavLink>
      </h2>
    </section>
  );
}