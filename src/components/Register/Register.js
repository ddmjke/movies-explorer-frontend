import { NavLink } from "react-router-dom";
import useFormAndValidation from "../../hooks/useFormAndValidation";

export default function Register(props) {
  const {values, handleChange, errors, isValid} = useFormAndValidation();

  return (
    <section className="register">
      <NavLink className="navigation__logo" to="/"/>
      <h2 className="register__title">Добро пожаловать!</h2>

      <form className="register__form" noValidate onSubmit={e => {
        e.preventDefault();
        props.onSubmit({
          name: values.name,
          email: values.email,
          password: values.password
        });
        }}>
        <label className="register__field">
        <span className="register__input-description">Имя</span>

          <input  
                name="name"
                value={values.name || ''}
                onChange={handleChange}
                className="register__input register__input_field_name"
                type="string"
                id="name"
                placeholder="Name"
                required
              />
          <span className="register__input-error">{errors.name}</span>
        </label>

        <label className="register__field">
        <span className="register__input-description">E-mail</span>

          <input  
                name="email"
                value={values.email || ''}
                onChange={handleChange}
                className="register__input register__input_field_email"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
          <span className="register__input-error">{errors.email}</span>
        </label>

        <label className="register__field">
        <span className="register__input-description">password</span>

          <input  
                name="password"
                value={values.password || ''}
                onChange={handleChange}
                className="register__input register__input_field_password"
                type="password"
                id="password"
                placeholder="password"
                required
              />
          <span className="register__input-error">{errors.password}</span>
        </label>

        <span className="networkerror">{props.errorText}</span>

        <button 
              className={`register__submit-button ${props.pending && 'pendingbutton'}  ${!isValid && 'inactive'}`}
              disabled={!isValid}
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